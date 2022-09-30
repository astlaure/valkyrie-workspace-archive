import { AsyncRouter } from '@astlaure/valkyrie-common';
import express from 'express';
import nunjucks from 'nunjucks';

export const websiteRouter = new AsyncRouter();

websiteRouter.router.use('/static', express.static('public', { index: false }));

const env = nunjucks.configure('src/views', {
  autoescape: true,
  watch: true,
});

websiteRouter.get('*', async (req, res) => {
  return res.send(env.render('index.njk', res.locals));
});
