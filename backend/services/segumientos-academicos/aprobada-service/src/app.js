const express = require("express");
const app = express()

const response={
    data:[],
    services:"aprobadas service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/aprobadas", (req,res)=>{
    response.data.push("a.idaprobada", "e.nombres","e.cedula","m.nombre","a.observacion","a.promediofinal");
    console.log(`Get aprobadas data`)
    return res.send(response);
})




module.exports= app;