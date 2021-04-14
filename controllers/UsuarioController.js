const {Usuario, sequelize} = require('../models/');

const usuariosController = {
    index: async (req, res) => {
        let usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },
    create: async (req, res) => {
        const {nome, email, senha} = req.body;
        const users = {nome, email, senha};
        let usuarios = await Usuario.create(users);
        return res.json(usuarios);
    },
    update: async (req, res) => {
        const {nome,email,senha} = req.body;
        const {id} = req.params;
        let usuarios = await Usuario.update({nome, email, senha}, {
            where: {id}
        });
        return res.json(usuarios);
    },
    delete: async (req, res) => {
        const {id} = req.params;
        let usuarios = await Usuario.destroy({
            where: {id}
        })
        return res.json(usuarios);
    }
}
//tratativa desses dados
module.exports = usuariosController;