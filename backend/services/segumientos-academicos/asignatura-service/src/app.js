const express = require("express");
const app = express()

const response={
    data:[],
    services:"Asignaturas service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/asignaturas", (req,res)=>{
    response.data.push("a.idmateria", "e.nombres","a.nombre","a.facultad","a.carrera","a.nivel","a.paralelo","a.jornada");
    console.log(`Get asignaturas data`)
    return res.send(response);
})




module.exports= app;