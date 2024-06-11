require("dotenv").config();

module.exports = {
    development: {
      client: 'mysql2',
      connection: {
        host: process.env.DB_LOCAL_HOST,
        database: process.env.DB_LOCAL_DBNAME,
        user: process.env.DB_LOCAL_USER,
        password: process.env.DB_LOCAL_PASSWORD,
        charset: "utf8",
      },
      migrations: {
        directory: './db/migrations'
      },
      seeds: {
        directory: './db/seeds'
      }
    },
  };
  