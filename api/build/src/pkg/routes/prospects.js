"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prospectEntityRouter = void 0;
const express_1 = require("express");
const prospect_controller_1 = require("../controllers/prospect.controller");
exports.prospectEntityRouter = (0, express_1.Router)();
exports.prospectEntityRouter.route("/").get(prospect_controller_1.getAllProspects);
exports.prospectEntityRouter.route("/next").get(prospect_controller_1.getNextProspect);
