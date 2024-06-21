const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

app.get('/products', (req, res) => {
  fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => res.status(500).send(err));
});

app.listen(port, () => {
  console.log(`Proxy server running at http://localhost:${port}`);
});
