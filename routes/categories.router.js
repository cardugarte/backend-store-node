const express = require('express');

const router = express.Router();



//Parámetros de tipo params:
router.get('/:categoriasId/productos/:productosId', (req, res) => {
  const { categoriasId, productosId } = req.params;
  res.json({
    categoriasId,
    productosId,
  });
})

module.exports = router;
