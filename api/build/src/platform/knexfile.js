"use strict";
// Update with your config settings.
Object.defineProperty(exports, "__esModule", { value: true });
const db = {
    development: {
        client: "postgresql",
        connection: {
            host: "db",
            port: 5432,
            database: "helen",
            user: "postgres",
            password: "postgres",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: __dirname + "/migrations",
        },
        seeds: {
            directory: __dirname + "/seeds",
        },
    },
};
exports.default = db;
