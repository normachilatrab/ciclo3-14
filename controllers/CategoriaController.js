const { Categoria } = require('../models');


exports.list = async (req, res, next) => {
    try {
        const categoria = await Categoria.findAll();
        res.status(200).json(categoria)
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.add = async (req, res, next) => {
    try {
        const categoria = await Categoria.create(req.body)
        res.status(200).json(categoria)
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.update = async (req, res, next) => {
    try {
        const categoria = await Categoria.findOne({ where: { id: req.body.id } })
        if(categoria) {
            categoria.nombre = req.body.nombre;
            categoria.descripcion = req.body.descripcion;
            categoria.save();
            res.status(200).json(categoria)
        }
        else {
            res.status(404).json({ 'error': 'Categoria no existe' })
        }        
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.activate = async (req, res, next) => {
    try {
        const categoria = await Categoria.findOne({ where: { id: req.body.id } })
        if(categoria) {
            categoria.estado = 1;
            categoria.save();
            res.status(200).json(categoria)
        }
        else {
            res.status(404).json({ 'error': 'Categoria no existe' })
        }        
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.deactivate = async (req, res, next) => {
    try {
        const categoria = await Categoria.findOne({ where: { id: req.body.id } })
        if(categoria) {
            categoria.estado = 0;
            categoria.save();
            res.status(200).json(categoria)
        }
        else {
            res.status(404).json({ 'error': 'Categoria no existe' })
        }        
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}
