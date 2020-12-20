'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Articulos', [{
            codigo: 'A01',
            nombre: 'Cepillo de dientes',
            descripcion: 'Cepillo cerdas suaves Colgate',
            precio_venta: 12500,
            stock: 50,
            estado: 1,
            categoriaId: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Articulos', null, {});
    }
};