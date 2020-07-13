const express = require('express');
const app = express();
const routeHome = require('./routes/Home');
const routeSucursales = require("./routes/sucursales");
const routeMarcas = require("./routes/marcas");
const routeAutos = require("./routes/autos");

app.listen(3032,()=>console.log('Servidor en el puerto 3030 : Activado'));

app.use('/',routeHome)
app.use('/sucursales',routeSucursales)
app.use('/marcas', routeMarcas)
app.use('/autos', routeAutos)
