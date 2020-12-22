const { Usuario } = require('../models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.list = async (req, res, next) => {
    try {
        const user = await Usuario.findAll();
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.login = async (req, res, next) => {
    try {
        const user = await Usuario.findOne({ where: { email: req.body.email } })
        if (user) {
            // Evaluar contraseña
            const contrasenhaValida = bcrypt.compareSync(req.body.password, user.password)
            if (contrasenhaValida) {
                const token = jwt.sign({
                    id: user.id,
                    username: user.username,
                    email: user.username,
                    rol: user.rol,
                }, 'mipalabrasecreta', {
                    expiresIn: 3600
                })

                res.status(200).send({
                    auth: true,
                    tokenReturn: token,
                    user: user
                })

            } else {
                res.status(401).json({ 'error': 'Usuario o contraseña invalidos' })
            }

        } else {
            res.status(404).json({ 'error': 'Usuario o contraseña invalidos' })
        }

    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.add = async (req, res, next) => {
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const user = await Usuario.create(req.body)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.update = async (req, res, next) => {
    try {
        let pass = req.body.password;
        const usuario = await Usuario.findOne({ where: { email: req.body.email } })

        if(usuario) {
            if (pass != usuario.password) {
                req.body.password = await bcrypt.hashSync(req.body.password, 10);
            }
            usuario.nombre = req.body.nombre;
            usuario.password = req.body.password;
            usuario.estado = req.body.estado;
            usuario.update();
            res.status(200).json(usuario)
        }
        else {
            res.status(404).json({ 'error': 'Usuario no existe' })
        }        
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.activate = async (req, res, next) => {
    try {
        const usuario = await Usuario.findOne({ where: { id: req.body.id } })
        if(usuario) {
            usuario.estado = 1;
            usuario.save();
            res.status(200).json(usuario)
        }
        else {
            res.status(404).json({ 'error': 'Usuario no existe' })
        }        
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.deactivate = async (req, res, next) => {
    try {
        const usuario = await Usuario.findOne({ where: { id: req.body.id } })
        if(usuario) {
            usuario.estado = 0;
            usuario.save();
            res.status(200).json(usuario)
        }
        else {
            res.status(404).json({ 'error': 'Usuario no existe' })
        }        
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

