const {pool} = require('../../../db/conexion')


const getNoCumplidos = async(req,res)=>{
const response = await pool.query('select n.idnocumplido, e.nombres,e.cedula, t.tratamientopsicologico,t.tratamientofisico,n.observacion from tratamientonocumplido n join tratamiento t on t.idTratamiento = n.idTratamiento join estudiante e on e.idEstudiante = t.idEstudiante ')
res.status(200).json(response.rows)
}




const crearNoCumplidos = async(req,res)=>{
const {idTratamiento,observacion} = req.body;
const insersion = await pool.query('insert into tratamientonocumplido(idtratamiento,observacion)values($1,$2)',
[
    idTratamiento,
    observacion
])
res.json({
    body:{
        message: 'no se cumplio el tratamiento',
        tratamientonocumplido: {idTratamiento,observacion}
    }
})
}





const eliminarNoCumplido = async(req,res)=>{
const idNocumplido = req.params.idNocumplido;
const eliminacion = await pool.query('delete from tratamientonocumplido where idNocumplido = $1',
[
    idNocumplido
])
res.json({
    message: 'se elimino el tratamiento no cumplido'
})
}



module.exports = {
    getNoCumplidos,
    crearNoCumplidos,
    eliminarNoCumplido
}