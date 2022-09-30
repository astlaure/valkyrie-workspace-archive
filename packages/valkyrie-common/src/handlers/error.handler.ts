import { NextFunction, Request, Response } from 'express';
import { HttpError } from '../errors/http.error';

export function errorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
  if (err instanceof HttpError) {
    return res.status(err.httpCode).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    message: err.message,
  });
}
