// --- D A T A B A S E - M O N G O O S E ---
const mongoose = require('mongoose');

mongoose
    .set('strictQuery', false) // Hide warning of Mongoose 7
    .connect('mongodb://127.0.0.1/mean-employees', { // Database name = "mean-employees" in localhost (127.0.0.1)
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then((db) => console.log('Mongoose is connected to MongoDB succesfully!'))
    .catch((error) => console.log("Error en la conexion con MongoDB", error));