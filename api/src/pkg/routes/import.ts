import { Router } from "express";
import {
  getImportData,
  postImportData,
} from "../controllers/import.controller";

export const importEntityRouter: Router = Router();

importEntityRouter.route("/").get(getImportData).post(postImportData);
