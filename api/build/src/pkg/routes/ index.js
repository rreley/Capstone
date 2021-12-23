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
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexEntityRouter = void 0;
const express_1 = require("express");
exports.indexEntityRouter = (0, express_1.Router)();
/* GET home page. */
exports.indexEntityRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // return res.send(req.oidc.isAuthenticated() ? 'logged in' : 'logged out')
    return res.status(200).send({
        message: "Hello World!",
    });
}));
