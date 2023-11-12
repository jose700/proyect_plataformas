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

app.get("/api/v2/historial-medico", (req, res) => {
    response.data.push("e.nombres","e.cedula","e.correo","t.clasediscapacidad","t.descripcionconsulta","t.tratamientopsicologico","t.tratamientofisico","c.fechainicio","c.fechafin");
    console.log('Get historial medico data');
    return res.send(response);
});

module.exports = app;