import express, { Application } from "express";
import fileUpload from "express-fileupload";
import helmet from "helmet";
import cors from "cors";
import { prospectEntityRouter } from "./src/pkg/routes/prospects";
import { testEntityRouter } from "./src/pkg/routes/test";
import { importEntityRouter } from "./src/pkg/routes/import";
import { analysisEntityRouter } from "./src/pkg/routes/analysis";
import * as dotenv from "dotenv";

dotenv.config();

console.log("==== Running config: " + process.env.MODE);
console.log("==== DB connection string: " + process.env.DB);
console.log("==== Auth0 Audience: " + process.env.AUTH0_AUDIENCE);

const app: Application = express();
const PORT: number = 5001;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileUpload());

app.use("/api/prospects", prospectEntityRouter);
app.use("/api/test", testEntityRouter);
app.use("/api/import", importEntityRouter);
app.use("/api/analysis", analysisEntityRouter);

const server = app.listen(PORT, () => {
  console.log("================= API listening at port %s", PORT);
});

module.exports = server;
