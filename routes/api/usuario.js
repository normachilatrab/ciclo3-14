const router = require('express').Router();
const userController = require('../../controllers/UsuarioController')

// (url)/api/usuario/login
router.post('/login', userController.login)
// (url)/api/usuario/list
router.get( '/list', userController.list)
// (url)/api/usuario/add
router.post('/add', userController.add)
// (url)/api/usuario/update
router.put('/update', userController.update)
// (url)/api/usuario/activate
router.put('/activate', userController.activate)
// (url)/api/usuario/deactivate
router.put('/deactivate', userController.deactivate)

module.exports = router;