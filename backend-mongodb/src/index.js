// --- M A I N ---
require('./database'); // Starting th MongoDB connection
const app = require('./app');

app.listen(app.get('port')); // Starting the application
console.log('Server is running on Express in port: ' + app.get('port') + ' with Morgan and Nodemon!');