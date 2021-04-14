const {Post, sequelize} = require ('../models/');

const postsController = {
    index: async (req, res) => {
        let listarposts = await Post.findAll();
        return res.json(listarposts);
    },
    create: async (req, res) => {
        const {texto, img, n_likes, usuarios_id} = req.body;
        const posters = {texto, img, n_likes, usuarios_id}
        let criarposts = await Post.create(posters);
        return res.json(criarposts);
    },
    update: async (req, res) => {
        const {texto, img, n_likes, usuarios_id} = req.body;
        const {id} = req.params;
        let atualizarposts = await Post.update(
            {texto, img, n_likes, usuarios_id}, {
            where: {
                id
            }
        });
        return res.send(atualizarposts);
    },
    delete: async (req, res) => {
        const {id} = req.params;
        let deletarposts = await Post.destroy({
            where: {
                id
            }}
        )
        return res.json(deletarposts);
    },
    show: async (req, res) => {
        const {usuarios_id} = req.params;
        let mostrarposts = await Post.findAll({where: {usuarios_id}});
        return res.json(mostrarposts);
    }
}

module.exports = postsController;