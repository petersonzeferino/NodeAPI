const express = require('express');

const app = express();
const router = express.Router();

const index = require('./routes/index');

app.use('/', index);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

module.exports = app;