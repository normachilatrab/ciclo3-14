const router = require('express').Router();
const articuloController = require('../../controllers/ArticuloController')

// (url)/api/articulo/list
router.get( '/list', articuloController.list)
// (url)/api/articulo/add
router.post( '/add', articuloController.add)
// (url)/api/articulo/update
router.put( '/update', articuloController.update)
// (url)/api/articulo/activate
router.put( '/activate', articuloController.activate)
// (url)/api/articulo/deactivate
router.put( '/deactivate', articuloController.deactivate)

module.exports = router;