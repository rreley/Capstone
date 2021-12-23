import knex from "knex";
import db from "./knexfile";

console.log("================= Starting Knex Client");
const dbClient = knex(db.development);

export default dbClient;
