const express = require("express");
const app = express()

const response={
    data:[],
    services:"Cumplidos service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/cumplidos", (req,res)=>{
    response.data.push("c.idcumplido", "e.nombres" ,"e.cedula" , "t.descripcionconsulta", "t.tratamientopsicologico","t.tratamientofisico", "c.observacion","c.fechainicio","c.fechafin");
    console.log(`Get tratamientos cumplidos data`)
    return res.send(response);
})




module.exports= app;