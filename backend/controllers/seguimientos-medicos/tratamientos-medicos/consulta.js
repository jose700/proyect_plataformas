const {pool} = require('../../../db/conexion')




const getTratamientos = async(req,res)=>{
    const response = await pool.query('select t.idtratamiento, e.nombres as estudiante, e.cedula as ci, t.clasediscapacidad,t.tratamientopsicologico,t.tratamientofisico,t.descripcionconsulta,t.opinionpaciente,t.fechaconsulta from tratamiento t join estudiante e on e.idestudiante = t.idEstudiante')
    res.status(200).json(response.rows);
}



const crearTratamientos = async(req,res)=>{
    const {idEstudiante,clasediscapacidad,
    descripcionconsulta,
    fechaconsulta,
    opinionpaciente,
    tratamientopsicologico,
    tratamientofisico
    } = req.body;
    const insersion = await pool.query('insert into tratamiento(idestudiante,clasediscapacidad,descripcionconsulta,fechaconsulta,opinionpaciente,tratamientopsicologico,tratamientofisico)values($1,$2,$3,$4,$5,$6,$7)',
    [
        idEstudiante,
        clasediscapacidad,
        descripcionconsulta,
        fechaconsulta,
        opinionpaciente,
        tratamientopsicologico,
        tratamientofisico
    ])
    res.json({
        body:{
            message: 'consulta creada',
            tratamiento:{idEstudiante,descripcionconsulta,opinionpaciente,fechaconsulta}
        }
    })
}






const eliminarTratamiento = async(req,res)=>{
const idTratamiento = req.params.idTratamiento;
const eliminacion = await pool.query('delete from tratamiento where idTratamiento = $1',
[
    idTratamiento
])
res.json({
    message: 'consulta eliminada'
})
}


const getTratamientoEstudiante = async(req,res)=>{
    const nombres = req.params.nombres;
    const response = await pool.query('select t.idtratamiento, e.nombres as estudiante, t.clasediscapacidad,t.tratamientopsicologico,t.tratamientofisico,t.descripcionconsulta,t.opinionpaciente,t.fechaconsulta from tratamiento t join estudiante e on e.idestudiante = t.idEstudiante where e.nombres like $1 ',
    [
        nombres + '%'
    ])
    res.status(200).json(response.rows)
}



module.exports = {
    getTratamientos,
    getTratamientoEstudiante,
    crearTratamientos,
    eliminarTratamiento
}