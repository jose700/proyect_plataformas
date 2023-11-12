const { query } = require('express');
const {pool} = require('../../db/conexion');



const getEstudiantes = async(req,res)=>{
    const response = await pool.query('select * from estudiante')
    res.status(200).json(response.rows);
}


const crearEstudiante = async(req,res)=>{
const {nombres,apellidos,cedula,correo,edad,fechanacimiento} = req.body;
const insersion = await pool.query('insert into estudiante(nombres,apellidos,cedula,correo,edad,fechanacimiento)values($1,$2,$3,$4,$5,$6)',
[
    nombres,
    apellidos,
    cedula,
    correo,
    edad,
    fechanacimiento
])
res.json({
    body:{
        message: 'estudiante creado',
        estudiante:{nombres,cedula,correo}
    }
})

}


const getEstudianteCedula = async(req,res)=>{
const cedula = req.params.cedula;
const response = await pool.query('select idestudiante, nombres,apellidos,cedula,edad,correo,fechanacimiento from estudiante where cedula = $1',
[
    cedula
])
res.status(200).json(response.rows);
}



const eliminarEstuiante = async(req,res)=>{
const idEstudiante = req.params.idEstudiante;
const eliminacion = await pool.query('delete from estudiante where idEstudiante = $1',
[
    idEstudiante
])
res.json({
    body:{
        message: 'estudiante eliminado correctamente'
    }
})
}

module.exports = {
    getEstudiantes,
    crearEstudiante,
    getEstudianteCedula,
    eliminarEstuiante
}


