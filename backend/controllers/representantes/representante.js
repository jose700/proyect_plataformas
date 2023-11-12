const {pool} = require('../../db/conexion')



const getRepresentantes = async(req,res)=>{
const response = await pool.query('select r.idrepresentante, e.nombres as representado, r.nombres,r.apellidos,r.cedula,r.ocupacion from representante r join estudiante e on  e.idEstudiante = r.idEstudiante')
res.status(200).json(response.rows);
}



const crearRepresentantes = async(req,res)=>{
const {idEstudiante,nombres,apellidos
    ,cedula,correo,estadocivil,ocupacion} = req.body;
const insersion = await pool.query('insert into representante(idEstudiante,nombres,apellidos,cedula,correo,estadocivil,ocupacion)values($1,$2,$3,$4,$5,$6,$7)',
[
    idEstudiante,
    nombres,
    apellidos,
    cedula,
    correo,
    estadocivil,
    ocupacion
])
res.json({
    body:{
        message: 'representante creado',
        representante:{nombres,cedula,ocupacion}
    }
})
}


const eliminarRepresentante = async(req,res)=>{
const idRepresentante = req.params.idRepresentante;
const eliminacion = await pool.query('delete from representante where idRepresentante = $1',
[
    idRepresentante
])
res.json({
    message: 'representante eliminado'
})
}


const getRepresentanteCedula = async(req,res)=>{
    const cedula = req.params.cedula;
    const response = await pool.query('select r.idrepresentante, e.nombres as representado, r.nombres,r.apellidos,r.cedula,r.ocupacion from representante r join estudiante e on  e.idEstudiante = r.idEstudiante where r.cedula = $1',
    [
        cedula
    ])
    res.status(200).json(response.rows)
}


module.exports = {
    getRepresentantes,
    getRepresentanteCedula,
    crearRepresentantes,
    eliminarRepresentante
}










