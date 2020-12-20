const { Sequelize } = require('sequelize');
const usuariosModel = require('./usuario')
const categoriasModel = require('./categoria')
const articulosModel = require('./articulo')

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite3"
});

const Usuario = usuariosModel(sequelize, Sequelize);
const Articulo = articulosModel(sequelize, Sequelize);
const Categoria = categoriasModel(sequelize, Sequelize);

sequelize.sync({ force: false })
  .then(() => {
    if (process.env.NODE_ENV !== 'test') {
      console.log('Tablas sincronizadas')
    }
  })

module.exports = {
  Usuario,
  Articulo,
  Categoria
}