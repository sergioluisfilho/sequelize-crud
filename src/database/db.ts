import { Sequelize } from "sequelize";

export const db = new Sequelize(
  process.env.DATABASE_NAME || "sequelize_test",
  process.env.DATABASE_USER || "root",
  process.env.DATABASE_PASS || "my-secret-pw",
  {
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT,
  }
);
