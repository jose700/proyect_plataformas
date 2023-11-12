const {pool} = require('../../../db/conexion');
const bcrypt = require('bcryptjs');



const getTutor = async(req,res)=>{
    const response = await pool.query('select * from tutor')
    res.status(200).json(response.rows)
}


const crearTutor = async(req,res)=>{
const {nombres,apellidos,cedula,correo,usuario,pass} = req.body;
const passencript = await bcrypt.hash(pass,10);

const insert = await pool.query('insert into tutor(nombres,apellidos,cedula,correo,usuario,pass)values($1,$2,$3,$4,$5,$6)',[
    nombres,
    apellidos,
    cedula,
    correo,
    usuario,
    passencript
])
res.json({
    message: 'tutot registrado',
    body:{
        tutor: {nombres,apellidos,usuario,passencript}
    }
})
}



module.exports = {
    getTutor,
    crearTutor
}













