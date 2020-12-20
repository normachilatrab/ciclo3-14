'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Usuario extends Model {
        static associate(models) {
        }
    };
    Usuario.init({
        id:{
            type: DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true,
        },
        rol: DataTypes.STRING,
        nombre: DataTypes.STRING,
        password: DataTypes.STRING,
        email: DataTypes.STRING,
        tipo_documento: DataTypes.STRING,
        num_documento: DataTypes.STRING,
        direccion: DataTypes.STRING,
        telefono: DataTypes.STRING,
        estado: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        sequelize,
        modelName: 'Usuarios',
    });
    return Usuario;
};