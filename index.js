const express = require('express');
const app = express();
const port = 3100;

app.get('/', (req, res) => {
  res.send('Hola mundo');
})


app.get('/productos', (req, res) => {
  res.json([
    {
      'name': 'producto 1',
      'price': 3000
    },
    {
      'name': 'producto 2',
      'price': 1000
    }
  ]);
})

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    'name': 'producto 2',
    'price': 1000
  });
})


app.get('/categorias/:categoriasId/productos/:productosId', (req, res) => {
  const { categoriasId, productosId } = req.params;
  res.json({
    categoriasId,
    productosId,
  });
})

app.listen(port, () => {
  console.log('port active ' + port);
})
