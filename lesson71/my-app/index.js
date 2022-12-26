import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

const port = 3000;

const posts = ['post 1', 'post 2', 'post 3', 'post 4'];

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/asdf', async (req, res) => {
  const { search } = req.query;
  const data = posts.filter((post) => post.includes(search));
  res.json(data);
});

app.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  const data = posts[id - 1];
  res.send(data);
});

app.get('/form', (req, res) => {
  res.sendFile(__dirname + '/public/form.html');
});

app.post('/form', (req, res) => {
  const { name } = req.body;
  res.send('Hello, ' + name);
});

app.get('/json', (req, res) => {
  res.sendFile(__dirname + '/public/send.html');
});

app.post('/json', (req, res) => {
  res.json({
    status: 'success',
    data: req.body,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
