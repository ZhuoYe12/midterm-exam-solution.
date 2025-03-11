const { Sequelize } = require('sequelize');

// Initialize Sequelize
const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
    host: 'localhost',
    dialect: 'mysql'
});

// Test Connection
sequelize.authenticate()
    .then(() => console.log('✅ Database connected...'))
    .catch(err => console.error('❌ Error connecting to DB:', err));

module.exports = sequelize;
