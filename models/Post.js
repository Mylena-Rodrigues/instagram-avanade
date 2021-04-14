module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post', {
        texto: DataTypes.STRING,
        img: DataTypes.STRING,
        n_likes: DataTypes.INTEGER,
        usuarios_id: DataTypes.INTEGER
        }, {
            tablename: "posts",
            timestamps: false,
        }
    );
    /*Post.associate = (models) => {
        Post.belongsTo(models.Usuario, {as: "usuario", foreignKey: 'usuarios_id'})
        Post.hasMany(models.Comentario, {as: "comentarios", foreignKey: 'posts_id'});
    }*/

    return Post;

}