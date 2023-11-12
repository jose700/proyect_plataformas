const {pool} = require('../../../db/conexion')




const getAsignaturas = async(req,res)=>{
const response = await pool.query('select a.idmateria, e.nombres,a.nombre,a.facultad,a.carrera,a.nivel,a.paralelo,a.jornada from materia a join estudiante e on e.idEstudiante = a.idEstudiante')
res.status(200).json(response.rows)
}


const crearAsignatura = async(req,res)=>{
const {idEstudiante,nombre,facultad,carrera,nivel,paralelo,jornada} = req.body;
const insersion = await pool.query('insert into materia(idEstudiante,nombre,facultad,carrera,nivel,paralelo,jornada)values($1,$2,$3,$4,$5,$6,$7)',
[
   idEstudiante,
   nombre,
   facultad,
   carrera,
   nivel,
   paralelo,
   jornada 
])
res.json({
    body:{
        message: 'asignatura creada',
        materia: {nombre,facultad,carrera,nivel}
    }
})
}



const eliminarAsignatura = async(req,res)=>{
    const idMateria = req.params.idMateria;
    const eliminacion = await pool.query('delete from materia where idMateria = $1',
    [
        idMateria
    ])
    res.json({
        message: 'asignatura eliminada'
    })
}


const getAsignaturaCedula = async(req,res)=>{
    const cedula = req.params.cedula;
    const response = await pool.query('select a.idmateria, e.nombres,a.nombre,a.facultad,a.carrera,a.nivel,a.paralelo,a.jornada from materia a join estudiante e on e.idEstudiante = a.idEstudiante where e.cedula = $1',
    [
        cedula
    ])
    res.status(200).json(response.rows)
}



module.exports = {
    getAsignaturas,
    getAsignaturaCedula,
    crearAsignatura,
    eliminarAsignatura
}