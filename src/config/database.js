module.exports = {
    development: {
        dialect: 'mysql',
        host: 'localhost',
        username: 'adm',
        password: '123456',
        database: 'api',
        operatorAliases: false,
        define: {
            timestamps: true,
            underscored: true,
            underscoredAll: true,
        },
    },
};