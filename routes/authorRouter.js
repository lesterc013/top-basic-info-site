import { Router } from 'express';
import fs from 'fs/promises';

const authorRouter = Router();

authorRouter.get('/', (req, res) => {
  res.send('Return all authors');
});

authorRouter.get('/:name', (req, res) => {
  res.send(`Get all books from author: ${req.params.name}`);
});

export default authorRouter;
