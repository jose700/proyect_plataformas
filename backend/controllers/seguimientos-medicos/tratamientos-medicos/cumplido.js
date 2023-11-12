const {pool} = require('../../../db/conexion')


const getCumplidos = async(req,res)=>{
    const response = await pool.query('select c.idcumplido, e.nombres as estudiante ,e.cedula as ci, t.descripcionconsulta, t.tratamientopsicologico,t.tratamientofisico, c.observacion,c.fechainicio,c.fechafin from tratamientocumplido c join tratamiento t on t.idTratamiento = c.idTratamiento join estudiante e on e.idEstudiante = t.idEstudiante')
    res.status(200).json(response.rows)
}


const crearCumplidos = async(req,res)=>{
    const {idTratamiento,observacion,fechainicio,fechafin} = req.body;  
    const insersion = await pool.query('insert into tratamientocumplido(idTratamiento,observacion,fechainicio,fechafin)values($1,$2,$3,$4)',
    [
        idTratamiento,
        observacion,
        fechainicio,
        fechafin
    ])
    res.json({
        body:{
            message: 'se cumplio el tratamiento',
            tratamientocumplido: {idTratamiento,fechainicio,fechafin}
        }
    })
}


const eliminarCumplido = async(req,res)=>{
    const idCumplido = req.params.idCumplido;
    const eliminacion = await pool.query('delete from tratamientocumplido where idCumplido = $1',
    [
       idCumplido 
    ])
    res.json({
        message: 'se elimino el tratamiento cumplido'
    })
}


const getCumplidosCedula = async(req,res)=>{
const cedula = req.params.cedula;
const response = await pool.query('select c.idcumplido, e.nombres as estudiante ,e.cedula as ci, t.descripcionconsulta, t.tratamientopsicologico,t.tratamientofisico, c.observacion,c.fechainicio,c.fechafin from tratamientocumplido c join tratamiento t on t.idTratamiento = c.idTratamiento join estudiante e on e.idEstudiante = t.idEstudiante where e.cedula = $1',
[
    cedula
])
res.status(200).json(response.rows)
}


module.exports = {
    getCumplidos,
    getCumplidosCedula,
    crearCumplidos,
    eliminarCumplido
}