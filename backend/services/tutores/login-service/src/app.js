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

app.get("/api/v2/login", (req, res) => {
    response.data.push("usuario", "nombres","pass");
    console.log('Succesfull data data');
    return res.send(response);
});

module.exports = app;