const {pool} = require('../../../db/conexion')



const getAprobadas = async(req,res)=>{
const response = await pool.query('select a.idaprobada, e.nombres,e.cedula,m.nombre,a.observacion,a.promediofinal from materiaaprobada a join materia m on m.idMateria = a.idMateria join estudiante e on e.idEstudiante = m.idEstudiante')
res.status(200).json(response.rows)
}




const crearAprobadas = async(req,res)=>{
    const {idMateria,observacion,promediofinal} = req.body;
    const insersion = await pool.query('insert into materiaaprobada(idMateria,observacion,promediofinal)values($1,$2,$3)',
    [
        idMateria,
        observacion,
        promediofinal
    ])
    res.json({
        body:{
            message: 'materia aprobada guardada',
            materiaaprobada: {idMateria,promediofinal}
        }
    })
}




const eliminarAprobada = async(req,res)=>{
    const idAprobada = req.params.idAprobada;
    const eliminacion = await pool.query('delete from materiaaprobada where idAprobada = $1',
    [
        idAprobada
    ])
    res.json({
        message: 'materia aprobada eliminada'
    })
}


const getAprobadaMateria = async(req,res)=>{
    const nombre = req.params.nombre;
    const response = await pool.query('select a.idaprobada, e.nombres,e.cedula,m.nombre,a.observacion,a.promediofinal from materiaaprobada a join materia m on m.idMateria = a.idMateria join estudiante e on e.idEstudiante = m.idEstudiante where m.nombre like $1',
    [
        nombre + '%'
    ])
    res.status(200).json(response.rows)
}




module.exports = {
    getAprobadas,
    getAprobadaMateria,
    crearAprobadas,
    eliminarAprobada
}