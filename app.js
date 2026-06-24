import express from 'express';
import fs from 'fs/promises';

const app = express();

if (process.env.NODE_ENV === 'dev') {
  console.log(process.env.NODE_ENV);
}

const PORT = 8080;

// Set this middleware to allow serving static files like html - otherwise it will just trigger a download of the file when you access the URL.
app.use(express.static('./'));

app.get('/', async (req, res) => {
  const html = await fs.readFile('./index.html');
  res.set('Content-Type', 'text/html');
  res.send(html);
});

app.get('/about', async (req, res) => {
  const html = await fs.readFile('./about.html');
  res.set('Content-Type', 'text/html');
  res.send(html);
});

app.get('/contact-me', async (req, res) => {
  const html = await fs.readFile('./contact-me.html');
  res.set('Content-Type', 'text/html');
  res.send(html);
});

app.use(async (req, res, next) => {
  res.status(404);
  const html = await fs.readFile('./404.html');
  res.set('Content-Type', 'text/html');
  res.send(html);
});

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
  console.log(`Listening on port ${PORT}!`);
});
