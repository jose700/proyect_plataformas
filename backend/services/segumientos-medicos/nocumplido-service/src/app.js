const express = require("express");
const app = express()

const response={
    data:[],
    services:"Nocumplidos service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/nocumplidos", (req,res)=>{
    response.data.push("n.idnocumplido", "e.nombres","e.cedula", "t.tratamientopsicologico","t.tratamientofisico","n.observacion");
    console.log(`Get tratamientos no cumplidos data`)
    return res.send(response);
})




module.exports= app;