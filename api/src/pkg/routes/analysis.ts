import { Router } from "express";
import { getAnalysisData } from "../controllers/analysis.controller";

export const analysisEntityRouter: Router = Router();

analysisEntityRouter.route("/").get(getAnalysisData);
