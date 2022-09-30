import 'dotenv/config';
import { Dialect, Options } from 'sequelize';

export interface DatabaseConfig {
  [env: string]: Options;
}

export const databaseConfig: DatabaseConfig = {
  test: {
    storage: ':memory:',
    dialect: 'sqlite',
  },
  development: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: process.env.DATABASE_DIALECT as Dialect,
  },
  production: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    dialect: process.env.DATABASE_DIALECT as Dialect,
  },
}
