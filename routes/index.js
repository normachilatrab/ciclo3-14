const router = require('express').Router();
const apiRouterUsuario = require('./api/usuario')
const apiRouterCategoria = require('./api/categoria')
const apiRouterArticulo = require('./api/articulo')

router.use('/usuario',apiRouterUsuario )
router.use('/categoria',apiRouterCategoria )
router.use('/articulo',apiRouterArticulo )

module.exports = router;