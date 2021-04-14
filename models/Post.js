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
    Post.associate = (models) => {
        // Relação N:1 (Cada post só tem um usuário)
        Post.belongsTo(models.Usuario, {as: "usuario", foreignKey: "usuarios_id"});
        // Relação N:M (Post tem curtidas de varios usuarios)
        Post.belongsToMany(models.Usuario, {
            as: "curtiu",
            through: "curtidas",
            foreignKey: "posts_id",
            otherKey: "usuarios_id",
            timestamps: false
        });
    }

    return Post;

}