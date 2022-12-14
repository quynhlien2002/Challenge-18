const express = require('express');
const db = require('./config/connection');
const routes = require('./routes')

// const cwd = process.cwd();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server for running on port ${PORT}`)
    });
});