import db from '../db.js';
import CustomNotFoundError from '../errors/CustomNotFoundError.js';

async function getAllAuthors(req, res) {
  res.send(await db.getAllAuthors());
}

async function getAuthorById(req, res) {
  const { id } = req.params;

  const author = await db.getAuthorById(Number(id));

  if (!author) {
    throw new CustomNotFoundError(`Author id ${id} not found.`);
  }

  res.send(`Author Name: ${author.name}`);
}

export { getAllAuthors, getAuthorById };
