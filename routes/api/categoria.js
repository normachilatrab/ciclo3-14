const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaController')

// (url)/api/categoria/list
router.get( '/list', categoriaController.list)
// (url)/api/categoria/add
router.post( '/add', categoriaController.add)
// (url)/api/categoria/update
router.put( '/update', categoriaController.update)
// (url)/api/categoria/activate
router.put( '/activate', categoriaController.activate)
// (url)/api/categoria/deactivate
router.put( '/deactivate', categoriaController.deactivate)

module.exports = router;