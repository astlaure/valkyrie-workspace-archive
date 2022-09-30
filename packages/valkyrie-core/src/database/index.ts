import { Sequelize } from 'sequelize';
import { databaseConfig } from './database.config';

export const database = new Sequelize(
  databaseConfig[process.env.NODE_ENV || 'development'],
);
