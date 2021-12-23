import { Prospect } from "../models/prospect.model";
import dbClient from "../../platform/db";

const ProspectService = {
  getAllProspects: async (request: Request, response: Response) => {
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
  },
};

export default ProspectService;
