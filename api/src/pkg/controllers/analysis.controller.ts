import { Request, Response } from "express";
import dbClient from "../../platform/db";

export const getAnalysisData = async (request: Request, response: Response) => {
  console.log("=== GET /api/analysis");

  var dataArr = [];
  const query = await dbClient("call_tracking")
    .select("*")
    .from("call_tracking")
    .then(function (result) {
      result.forEach(function (value) {
        var dateObj = new Date(value.created_at);
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newdate = day + "/" + month + "/" + year;
        dataArr.push(newdate);
      });
      return dataArr;
    });

  return response.status(200).send({
    message: "Helen API: /api/analysis - GET analysis data.",
    result: query,
  });
};
