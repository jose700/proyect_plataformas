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

app.get("/api/v2/representantes", (req, res) => {
    response.data.push("r.idrepresentante", "e.nombres", "r.nombres","r.apellidos","r.cedula","r.ocupacion");
    console.log('Get representantes data');
    return res.send(response);
});

module.exports = app;