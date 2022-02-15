const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const usersRouter = require('./users.router');
const express = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router)
  router.use('/productos', productsRouter);
  router.use('/categorias',categoriesRouter );
  router.use('/usuarios', usersRouter);
}

module.exports = routerApi;
