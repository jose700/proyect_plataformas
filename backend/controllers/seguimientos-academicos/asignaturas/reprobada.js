const {pool} = require('../../../db/conexion')



const getReprobadas = async(req,res)=>{
    const response = await pool.query('select r.idreprobada, e.nombres,e.cedula,m.nombre,r.motivo from materiareprobada r join materia m on m.idMateria = r.idMateria join estudiante e on e.idEstudiante = m.idEstudiante')
    res.status(200).json(response.rows)
}




const crearReprobadas = async(req,res)=>{
    const {idMateria,motivo} = req.body;
  const insersion = await pool.query('insert into materiareprobada(idMateria,motivo)values($1,$2)',
  [
    idMateria,
    motivo
  ])
  res.json({
    body: {
        message: 'materia reprobada creada',
        materiareprobada: {idMateria,motivo}
    }
  })
}




const eliminarReprobada = async(req,res)=>{
    const idReprobada = req.params.idReprobada;
    const eliminacion = await pool.query('delete from materiareprobada where idReprobada = $1',
    [
        idReprobada
    ])
    res.json({
        message: 'materia reprobada eliminada'
    })
}


const getReprobadaMateria = async(req,res)=>{
    const nombre = req.params.nombre;
    const response = await pool.query('select r.idreprobada, e.nombres,e.cedula,m.nombre,r.motivo from materiareprobada r join materia m on m.idMateria = r.idMateria join estudiante e on e.idEstudiante = m.idEstudiante where m.nombre like $1',
    [
        nombre + '%'
    ])
    res.status(200).json(response.rows)
}



module.exports = {
    getReprobadas,
    getReprobadaMateria,
    crearReprobadas,
    eliminarReprobada
}