const express = require('express');
const app = express();
const port = 3100;

app.get('/', (req, res) => {
  res.send('Hola mundo');
});

app.listen(port, () => {
  console.log('port active ' + port);
})
