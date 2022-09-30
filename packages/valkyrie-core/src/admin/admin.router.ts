import { AsyncRouter } from '@astlaure/valkyrie-common';
import express from 'express';
import path from 'path';
import nunjucks from 'nunjucks';

const base = path.dirname(require.resolve('@astlaure/valkyrie-admin/package.json'));
export const adminRouter = new AsyncRouter("/admin");
const env = nunjucks.configure(`${base}/views`, {
  autoescape: true,
  watch: true,
});

adminRouter.router.use('/static', express.static(`${base}/dist`, { index: false }));

adminRouter.get('*', (req, res) => {
  const context = { ...res.locals, basename: '/admin' };
  return res.send(env.render('index.njk', context));
});
