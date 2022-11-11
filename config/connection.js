const {connect, connection} = require('mongoose');

const connectionString = 
    process.env.MONGODB_URI || 

connect(connectionString, {
    useNewUrlParser: true,
    userUnifiedTopology: true,
});

module.exports = connection;