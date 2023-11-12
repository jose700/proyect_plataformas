const express = require('express');
const app = express();

const response = {
    data: [],
    services: "All services",
    arquitectura: "Microservicios"
};

app.use((req, res, next) => {
    response.data = [];
    next();
});

app.get("/api/v2/estudiantes", (req, res) => {
    response.data.push("id","nombres","apellidos","cedula","correo","edad","fechanacimiento");
    console.log('Get estudiantes data');
    return res.send(response);
});

module.exports = app;