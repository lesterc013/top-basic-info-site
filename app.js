import express from 'express';
import fs from 'fs/promises';
import indexRouter from './routes/indexRouter.js';
import authorRouter from './routes/authorRouter.js';

if (process.env.NODE_ENV === 'dev') {
  process.loadEnvFile();
}

const app = express();
const PORT = process.env.PORT || 8080;

// Set this middleware to allow serving static files like html - otherwise it will just trigger a download of the file when you access the URL.
app.use(express.static('./'));
app.use('/', indexRouter);
app.use('/author', authorRouter);

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
