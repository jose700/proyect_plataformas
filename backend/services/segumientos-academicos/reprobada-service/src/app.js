const express = require("express");
const app = express()

const response={
    data:[],
    services:"reprobadas service",
    arquitecture:"Microservices"
}

app.use((req,res,next)=>{
    response.data=[];
    next();
})


app.get("/api/v2/reprobadas", (req,res)=>{
    response.data.push("r.idreprobada", "e.nombres","e.cedula","m.nombre","r.motivo");
    console.log(`Get reprobadas data`)
    return res.send(response);
})




module.exports= app;