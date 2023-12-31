const express = require('express');
const app = express();
const { check } = require('express-validator');
const path = require('path');

app.listen('3000');
app.set('view engine', 'html');

const mainRoutes = require('./routes/mainRoutes');
app.use('/', mainRoutes);
