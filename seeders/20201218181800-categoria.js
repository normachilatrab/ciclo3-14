'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Categoria', [{
            id: 1,
            nombre: 'Aseo Personal',
            descripcion: 'Esta categoria contiene los articulos de aseo personal',
            estado: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Categoria', null, {});
    }
};