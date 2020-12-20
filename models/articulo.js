'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Articulo extends Model {
        static associate(models) {
            this.belongsTo(models.Categoria, { foreignKey: 'categoriaId', as: 'categoria' })
        }
    };
    Articulo.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
        },
        codigo: DataTypes.STRING,
        nombre: DataTypes.STRING,
        descripcion: DataTypes.STRING,
        precio_venta: DataTypes.INTEGER,
        stock: DataTypes.INTEGER,
        estado: DataTypes.INTEGER,
        categoriaId: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Articulo',
    });
    return Articulo;
};
