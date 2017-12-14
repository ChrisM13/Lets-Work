var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
const bodyParser = require('body-parser');

require('dotenv').config()
require('./config/database');
var app = express();

app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(require('./config/auth'))
// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'))
app.use('/api/employees', require('./routes/api/employees'))


app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
    console.log(`Express app running on port ${PORT}`)
});

