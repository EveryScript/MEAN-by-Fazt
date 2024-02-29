// --- A P P ---
// Server configuration
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const router = require('./routes/employees.routes');

// Setting .env variables
app.set('port', process.env.PORT || 4000);
// Using CORS function (installed by npm) to allow all origins
app.use(cors());
// Using Morgan to view all petitions in console
app.use(morgan('dev'));
// Express understanding JSON
app.use(express.json());
// Express understanding HTML forms
app.use(express.urlencoded({ extended: false }));
// Using the router settings with "prefix"
app.use('/api/employees', router);

// Exporting configuration (app)
module.exports = app;