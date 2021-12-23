import { Router, Response, Request } from "express";
import { checkJwt } from "../middleware/authz.middleware";
import { Prospect } from "../models/prospect.model";
import dbClient from "../../platform/db";

export const testEntityRouter: Router = Router();

testEntityRouter.get(
  "/private",
  checkJwt,
  (request: Request, response: Response) => {
    console.log("=== GET /api/test/private");
    response.json({
      message:
        "Helen API: /api/test/private - This is a private route that checked your JWT!",
    });
  }
);

testEntityRouter.get("/public", (request: Request, response: Response) => {
  console.log("=== GET /api/test/public");
  response.json({
    message: "Helen API: /api/test/public - This is a public route.",
  });
});

testEntityRouter.get(
  "/prospects",

  async (request: Request, response: Response) => {
    console.log("=== GET /api/test/prospects");
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
      message: "Helen API: /api/test/prospects - GET all prospects",
      result: result,
    });
  }
);

// testEntityRouter.get("/:id", (request: Request, response: Response) => {
//   response.json({
//     my_name: "jeff",
//   });
// });
