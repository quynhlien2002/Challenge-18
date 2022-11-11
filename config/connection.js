const {connect, connection} = require('mongoose');

const connectionString = 
    process.env.MONGODB_URI || `mongodb://localhost:27017/userData`;

connect(connectionString, {
    useNewUrlParser: true,
    userUnifiedTopology: true,
});

module.exports = connection;