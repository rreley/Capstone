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
exports.testEntityRouter = void 0;
const express_1 = require("express");
const authz_middleware_1 = require("../middleware/authz.middleware");
const db_1 = __importDefault(require("../../platform/db"));
exports.testEntityRouter = (0, express_1.Router)();
exports.testEntityRouter.get("/private", authz_middleware_1.checkJwt, (request, response) => {
    console.log("=== GET /api/test/private");
    response.json({
        message: "Helen API: /api/test/private - This is a private route that checked your JWT!",
    });
});
exports.testEntityRouter.get("/public", (request, response) => {
    console.log("=== GET /api/test/public");
    response.json({
        message: "Helen API: /api/test/public - This is a public route.",
    });
});
exports.testEntityRouter.get("/prospects", (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("=== GET /api/test/prospects");
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
        message: "Helen API: /api/test/prospects - GET all prospects",
        result: result,
    });
}));
// testEntityRouter.get("/:id", (request: Request, response: Response) => {
//   response.json({
//     my_name: "jeff",
//   });
// });
