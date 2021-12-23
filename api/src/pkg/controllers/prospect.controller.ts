import { Request, Response } from "express";
// import ProspectService from "../services/prospects.service"; // do we need the service?
import dbClient from "../../platform/db";
import { Prospect } from "../models/prospect.model";

export const getAllProspects = async (request: Request, response: Response) => {
  console.log("=== GET /api/prospects");
  var dataArr: Prospect[] = [];
  var result = await dbClient<Prospect>("prospect")
    .select("*")
    .from("prospect")
    .then(function (result) {
      result.forEach(function (value: Prospect) {
        dataArr.push(value);
      });
      return dataArr;
    });

  response.json({
    message: "Helen API: /api/prospects - GET all prospects",
    result: result,
  });
};

export const getNextProspect = async (request: Request, response: Response) => {
  console.log("=== GET /api/prospects/next");

  const result = await dbClient<Prospect>("prospect")
    // Find first "activated" prospect
    .select("*")
    .from("prospect")
    .where("activated", true)
    .first()

    // Find primary dept and prog name
    .join("program as primary_program", {
      "primary_program.program_id": "prospect.primary_program_id",
    })
    .join("department as primary_department", {
      "primary_department.department_id": "primary_program.department_id",
    })
    .select(
      "primary_department.department_name as primary_department_name",
      "primary_program.program_name as primary_program_name"
    )

    // Find secondary dept and prog name
    .join("program as secondary_program", {
      "secondary_program.program_id": "prospect.secondary_program_id",
    })
    .join("department as secondary_department", {
      "secondary_department.department_id": "secondary_program.department_id",
    })
    .select(
      "secondary_department.department_name as secondary_department_name",
      "secondary_program.program_name as secondary_program_name"
    )

    .then(function (result) {
      return result;
    });

  response.json({
    message: "Helen API: /api/prospects/next - GET next prospect",
    result: result,
  });
};
