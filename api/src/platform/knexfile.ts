// Update with your config settings.

const db = {
  development: {
    client: "pg",
    connection: {
      connectionString: process.env.DB,
      ssl: { rejectUnauthorized: false },
    },
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
};

export default db;
