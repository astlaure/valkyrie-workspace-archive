import { RequestHandler } from 'express';

export class StaticMiddleware {
  constructor(
    public path: string,
    public handler: RequestHandler,
  ) {}
}
