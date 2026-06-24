import db from '../db.js';

async function getAllAuthors(req, res) {
  res.send(await db.getAllAuthors());
}

async function getAuthorById(req, res) {
  const { id } = req.params;

  const author = await db.getAuthorById(Number(id));

  if (!author) {
    res.status(404).send('Author not found');
    return;
  }

  res.send(`Author Name: ${author.name}`);
}

export { getAllAuthors, getAuthorById };
