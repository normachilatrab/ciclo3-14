'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuarios', [{
            rol: 'Administrador',
            nombre: 'Norma',
            password: '$2y$10$sdm6wNa9d/ykaavs3PMZJO/ba0uHztGFGmfEwGdlRHnshL1oqjJIW',
            email: 'prueba@gmail.com',
            tipo_documento: 'CC',
            num_documento: '45678901',
            direccion: 'Medellin',
            telefono: '6134567',
            estado: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    down: async(queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Usuarios', null, {});

    }
};