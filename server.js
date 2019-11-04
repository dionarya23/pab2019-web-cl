const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use("/", require('./routes/artikel'))

app.listen(PORT, () => console.log("Running on 127.0.0.1:"+PORT))
