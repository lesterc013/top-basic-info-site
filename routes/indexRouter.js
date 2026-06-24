import { Router } from 'express';
import fs from 'fs/promises';

const indexRouter = Router();

indexRouter.get('', async (req, res) => {
  const html = await fs.readFile('./index.html');
  res.set('Content-Type', 'text/html');
  res.send(html);
});

indexRouter.get('/about', async (req, res) => {
  const html = await fs.readFile('./about.html');
  res.set('Content-Type', 'text/html');
  res.send(html);
});

indexRouter.get('/contact-me', async (req, res) => {
  const html = await fs.readFile('./contact-me.html');
  res.set('Content-Type', 'text/html');
  res.send(html);
});

export default indexRouter;
