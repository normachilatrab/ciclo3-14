const router = require('express').Router();
const userController = require('../../controllers/UsuarioController')

// (url)/api/usuario/
router.get( '/', userController.list)
// (url)/api/usuario/register
router.post('/register', userController.register)
// (url)/api/usuario/login
router.post('/login', userController.login)

module.exports = router;