const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const adminRoutes = require('./routes/user.routes');
// const db = require("./model");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(adminRoutes);

app.listen(port || 8000, ()=> console.log(`app is running on port -> ${port || 8000}`));