const { pool } = require("../../../db/conexion")
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const crearLogin = async(req,res)=>{
    const { usuario, pass } = req.body;
    const response = await pool.query('SELECT * FROM tutor WHERE usuario = $1', 
    [
        usuario
    ]);
    
    if (response.rows.length === 0) {
      return res.json({ error: 'Usuario incorrecto' });
    }
  
    const passwordMatch = bcrypt.compareSync(pass, response.rows[0].pass);
    if (!passwordMatch) {
      return res.json({ error: 'Contraseña incorrecta' });
    }
  
    res.json({ success: 'Inicio de sesión exitoso',
               token: token(response)
});


}

function token(response){
    const payload = {
          usuario: response.usuario,
          nombres: response.nombres
    }
    return jwt.sign(payload,'sistema de seguimiento');
}


module.exports = {
    crearLogin
}
