const express = require("express");
const app = express()

const response={
    data:[],
    services:"Consultas service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/consultas", (req,res)=>{
    response.data.push("t.idtratamiento", "e.nombres", "estudiante", "e.cedula", "ci", "t.clasediscapacidad","t.tratamientopsicologico","t.tratamientofisico","t.descripcionconsulta","t.opinionpaciente","t.fechaconsulta");
    console.log(`Get consultas data`)
    return res.send(response);
})




module.exports= app;