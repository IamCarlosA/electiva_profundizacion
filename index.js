const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();
require('./database/config');

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

//rutas
app.use('/api', require('./routes/allRoutes'));

//conexion bd
app.listen(process.env.PORT, () => {
    console.log(`Servidor en el puerto ${process.env.PORT}`)
})