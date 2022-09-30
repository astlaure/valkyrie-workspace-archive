import express, { RequestHandler } from 'express';
import { asyncHandler } from '../handlers/async.handler';

export class AsyncRouter {
  router = express.Router();

  constructor(public base = '') { }

  all(path: string, ...requestHandlers: RequestHandler[]) {
    const routeHandler = requestHandlers.pop();
    this.router.all(path, ...requestHandlers, asyncHandler(routeHandler!));
  }

  get(path: string, ...requestHandlers: RequestHandler[]) {
    const routeHandler = requestHandlers.pop();
    this.router.get(path, ...requestHandlers, asyncHandler(routeHandler!));
  }

  post(path: string, ...requestHandlers: RequestHandler[]) {
    const routeHandler = requestHandlers.pop();
    this.router.post(path, ...requestHandlers, asyncHandler(routeHandler!));
  }

  put(path: string, ...requestHandlers: RequestHandler[]) {
    const routeHandler = requestHandlers.pop();
    this.router.put(path, ...requestHandlers, asyncHandler(routeHandler!));
  }

  patch(path: string, ...requestHandlers: RequestHandler[]) {
    const routeHandler = requestHandlers.pop();
    this.router.patch(path, ...requestHandlers, asyncHandler(routeHandler!));
  }

  delete(path: string, ...requestHandlers: RequestHandler[]) {
    const routeHandler = requestHandlers.pop();
    this.router.delete(path, ...requestHandlers, asyncHandler(routeHandler!));
  }
}
