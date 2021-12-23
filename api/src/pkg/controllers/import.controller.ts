import { Request, Response } from "express";
import { Buffer } from "buffer";
import dbClient from "../../platform/db";
import { Prospect } from "../models/prospect.model";
import * as fast_csv from "fast-csv";

export const getImportData = async (request: Request, response: Response) => {
  console.log("=== GET /api/import");
  return response.status(200).send({
    message:
      "Helen API: /api/import - GET import data. Getting this route does nothing.",
  });
};

export const postImportData = async (request: Request, response: Response) => {
  console.log("=== POST /api/import");

  if (!request.files) {
    return response.status(400).json({ message: "No file uploaded" });
  }
  if (request.files === undefined) {
    return response.status(400).json({ message: "File undefined" });
  }

  //@ts-ignore
  const csv = Buffer.from(request.files!.file.data, "utf-8").toString("ascii");

  fast_csv
    .parseString(csv, { headers: true })
    .on("error", (error) => console.error(error))
    .on("data", async (row) => {
      // console.log("Add row");
      // console.log(row);

      // knex logic here
      await dbClient<Prospect>("prospect").insert(row);

      // TODO:
      // If row fails to insert return
      // a description of why it failed.
      // ie. Key already in db, data not in correct form, ...
    })
    .on("end", (rowCount: number) => console.log(`Parsed ${rowCount} rows`));

  return response.json({
    message: "Helen API: /api/import - POST import data",
  });
};
