module.exports = {
    General: {
        port: process.env.API_PORT || 5000,
        cors: true,
    },
    Database: {
        host: process.env.DB_HOST || '127.0.0.1',
        database: process.env.DB_NAME || 'tt_db',
        user: process.env.DB_USER || 'tt_user',
        password: process.env.DB_PASSWORD || 'tt_password',
    },
}
