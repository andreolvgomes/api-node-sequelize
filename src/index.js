const express = require('express');
const routes = require('./routes/User');

const app = express();

app.use(express.json());

app.use(routes);

app.listen(8080);