import { Router } from 'express';
import {
  getAllAuthors,
  getAuthorById,
} from '../controllers/authorController.js';
import fs from 'fs/promises';

const authorRouter = Router();

authorRouter.get('/', getAllAuthors);

authorRouter.get('/:id', getAuthorById);

export default authorRouter;
