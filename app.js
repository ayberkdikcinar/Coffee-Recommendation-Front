const express = require('express');
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

const mainRouter = require('./main.router')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded());

app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.engine('handlebars', engine({
    extname: 'handlebars',
    defaultLayout: "",
    layoutsDir: "",
}));

app.use('/', mainRouter);


module.exports = app