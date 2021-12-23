"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNextProspect = exports.getAllProspects = void 0;
const db_1 = __importDefault(require("../../platform/db"));
const getAllProspects = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("=== GET /api/prospects");
    var dataArr = [];
    var result = yield (0, db_1.default)("prospect")
        .select("*")
        .from("prospect")
        .then(function (result) {
        result.forEach(function (value) {
            dataArr.push(value);
        });
        return dataArr;
    });
    response.json({
        message: "Helen API: /api/prospects - GET all prospects",
        result: result,
    });
});
exports.getAllProspects = getAllProspects;
const getNextProspect = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("=== GET /api/prospects/next");
    const subquery = yield (0, db_1.default)("prospect")
        .select("*")
        .from("program")
        .where("program_name", "=", "primary_program_id");
    const result = yield (0, db_1.default)("prospect")
        .select("*")
        .from("prospect")
        .where("activated", true)
        .first()
        .join("program", { program_id: "prospect.primary_program_id" })
        .join("department", function () {
        this.on("department.department_id", "=", "program.department_id");
    })
        .select("department_name as primary_department_name", 
    // "department_id as primary_department_id",
    "program_name as primary_program_name")
        // .join("program", { program_id: "prospect.secondary_program_id" })
        // .join("department", function () {
        //   this.on("department.department_id", "=", "program.department_id");
        // })
        // .select(
        //   "department_name as secondary_department",
        //   // "department_id as primary_department_id",
        //   "program_name as secondary_program"
        // )
        .then(function (result) {
        console.log(result);
        return result;
    });
    response.json({
        message: "Helen API: /api/prospects/next - GET next prospect",
        result: result,
    });
});
exports.getNextProspect = getNextProspect;
// export const postProspect = (
//   request: Request,
//   response: Response,
//   next?: any
// ) => {
//   response.json({
//     message: "hello controller",
//   });
// };
