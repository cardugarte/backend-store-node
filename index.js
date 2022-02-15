const express = require('express');
const routerApi = require('./routes');

const app = express();
const port = 3100;

app.get('/', (req, res) => {
  res.send('Hola mundo');
})

routerApi(app);



app.listen(port, () => {
  console.log('port active ' + port);
})
