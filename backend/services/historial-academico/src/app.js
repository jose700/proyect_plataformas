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

app.get("/api/v2/historial-academico", (req, res) => {
    response.data.push("e.nombres", "e.cedula", "e.correo", "t.clasediscapacidad","m.facultad","m.carrera","m.nivel","m.paralelo","m.jornada","m.nombre","a.promediofinal","a.observacion");
    console.log('Get historial academico data');
    return res.send(response);
});

module.exports = app;