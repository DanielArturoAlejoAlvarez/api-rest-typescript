export const Keys = {
    host: process.env.HOST || '127.0.0.1',
    user: process.env.SUPERUSER || 'root',
    password: process.env.PASS || '',
    database: process.env.DB_NAME || 'api_rest_typescript',
    connectionLimit: 10 
}
