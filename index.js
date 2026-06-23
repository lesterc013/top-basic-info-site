import http from 'node:http';
import fs from 'fs/promises';

const PORT = 8080;
const HOSTNAME = '127.0.0.1';

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.method !== 'GET') {
    res.statusCode = 404;
    const errorHtml = await fs.readFile('./404.html');
    res.end(errorHtml);
    return;
  }

  let html = null;
  if (req.url === '/') {
    html = await fs.readFile('./index.html');
  } else if (req.url === '/about') {
    html = await fs.readFile('./about.html');
  } else if (req.url === '/contact-me') {
    html = await fs.readFile('./contact-me.html');
  } else {
    res.statusCode = 404;
    const errorHtml = await fs.readFile('./404.html');
    res.end(errorHtml);
    return;
  }

  res.end(html);
});

server.listen(PORT, HOSTNAME, () => {
  console.log(`Server started on port ${PORT}`);
});
