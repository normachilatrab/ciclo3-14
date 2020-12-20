const { Articulo } = require('../models');

exports.list = async (req, res, next) => {
    try {
        const articulo = await Articulo.findAll();
        res.status(200).json(articulo)
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.add = async (req, res, next) => {
    try {
        const articulo = await Articulo.create(req.body)
        res.status(200).json(articulo)
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.update = async (req, res, next) => {
    try {
        const articulo = await Articulo.findOne({ where: { id: req.body.id } })
        if(articulo) {
            articulo.codigo = req.body.codigo;
            articulo.nombre = req.body.nombre;
            articulo.descripcion = req.body.descripcion;
            articulo.precio_venta = req.body.precio_venta;
            articulo.stock = req.body.stock;
            articulo.save();
            res.status(200).json(articulo)
        }
        else {
            res.status(404).json({ 'error': 'Articulo no existe' })
        }        
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.activate = async (req, res, next) => {
    try {
        const articulo = await Articulo.findOne({ where: { id: req.body.id } })
        if(articulo) {
            articulo.estado = 1;
            articulo.save();
            res.status(200).json(articulo)
        }
        else {
            res.status(404).json({ 'error': 'Articulo no existe' })
        }        
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}

exports.deactivate = async (req, res, next) => {
    try {
        const articulo = await Articulo.findOne({ where: { id: req.body.id } })
        if(articulo) {
            articulo.estado = 0;
            articulo.save();
            res.status(200).json(articulo)
        }
        else {
            res.status(404).json({ 'error': 'Articulo no existe' })
        }        
    } catch (error) {
        res.status(500).json({ 'error': error.message })
        next()
    }
}
