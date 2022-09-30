import 'dotenv/config';
import express, { RequestHandler } from 'express';
import { AsyncRouter, errorHandler } from '@astlaure/valkyrie-common';
import bodyParser from 'body-parser';
import { adminRouter } from '../admin/admin.router';
import { websiteRouter } from '../websites/website.router';

export class Application {
  app = express();
  private middlewares: RequestHandler[] = [];
  private routers: AsyncRouter[] = [];

  addMiddleware(middleware: RequestHandler) {
    this.middlewares.push(middleware);
    return this;
  }

  addRouter(router: AsyncRouter) {
    this.routers.push(router);
    return this;
  }

  bootstrap() {
    this.app.use(bodyParser.json());
    this.middlewares.forEach(middleware => this.app.use(middleware));

    // administration
    this.app.use(adminRouter.base, adminRouter.router);

    // rest api
    this.routers.forEach(router => this.app.use(router.base, router.router));

    // website
    this.app.use(websiteRouter.base, websiteRouter.router);

    this.app.use(errorHandler);

    return this;
  }

  async start() {
    this.app.listen(3000, () => {});
  }
}
