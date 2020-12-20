'use strict';

module.exports = {
    up: async(queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Usuarios', [{
            rol: 'Administrador',
            nombre: 'Norma',
            password: '$2y$10$duHNuSP6nTtghvJycvbkhOwG5s7A5fBiMIc2VR7zYEIvBPM1d.vhi',
            email: 'usuario@gmail.com',
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