import 'dotenv/config';
import winston from 'winston';

const format = process.env.LOGGER_STYLE === 'json'
  ? winston.format.json()
  : winston.format.combine(
    winston.format.prettyPrint(),
    winston.format.timestamp(),
  );

const transports: winston.transport[] = [
  new winston.transports.Console(),
];

if (process.env.LOGGER_FILE === 'true') {
  transports.push(new winston.transports.File({
    eol: '\n',
    dirname: 'var/logs',
    filename: 'app.log',
    maxFiles: 10,
    maxsize: 5 * 1024 * 1024,
  }));
}

export const logger = winston.createLogger({
  level: process.env.LOGGER_LEVEL || 'info',
  format,
  transports,
});
