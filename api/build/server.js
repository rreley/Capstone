"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const prospects_1 = require("./src/pkg/routes/prospects");
const test_1 = require("./src/pkg/routes/test");
const app = (0, express_1.default)();
const PORT = 5001;
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/prospects", prospects_1.prospectEntityRouter);
app.use("/test", test_1.testEntityRouter);
const server = app.listen(PORT, () => {
    console.log("================= API listening at port %s", PORT);
});
module.exports = server;
