//Importamos el modelo
const User = require('../models/user.model');
//const {findAll, findById, addUser, updateUser} = require('../models/user.model');

//Funciones que manejan las respuestas
//Algunas manejan validaciones extra
//Al tomar los datos del body
//.export las exporta automáticamente
exports.findAll = (req, res) => {
    const data = User.findAll();
    res.status(200).json(data);
}

exports.findById = (req, res) => {
    const id = req.params.id;
    const data = User.findById(id);
    //Otra forma
    //const data = User.findById(req.params.id);
    // return data ? res.status(200).json(data) : res.status(404).json({message: "No se encontró el usuario"})
    if(!data) return res.status(404).json({message: "No se encontró el usuario"})
    return res.status(200).json(data);
}

/*
    Validaciones para addUser:
    - Los campos nombre y edad no pueden estar vacíos.
    - La edad debe ser un valor válido > 18.
    - Expresión regular para el correo.
*/

exports.addUser = (req, res) => {
    const user = req.body;
    //Otra forma
    //const addedUser = User.addUser(req.body);
    if(!req.body.name || !req.body.age) return res.status(400).json({message: "El nombre y/o edad no pueden estar vacíos."});
    if(req.body.age < 18) return res.status(400).json({message: "El usuario debe ser mayor de edad."});
    if(!validateEmail(req.body.email)) return res.status(400).json({message: "Correo inválido"});
    const addedUser = User.addUser(user);
    return res.status(200).json(addedUser);
}

/*
    Validaciones para updateUser:
    - Actualizar una edad válida (mayor de edad).
    - Actualizar un correo válido.
    - No dejar el nombre vacío.
*/

exports.updateUser = (req, res) => {
    const id = req.params.id;
    const user = req.body;
    //Otra forma
    //const updatedUser = User.updateUser(req.params.id, req.body);
    // return updatedUser ? res.status(200).json({message: "Usuario actualizado con éxito."}) : res.status(404).json({message: "No se encontró el usuario"})
    if(!req.body.name || !req.body.age) return res.status(400).json({message: "El nombre y/o edad no pueden estar vacíos."});
    if(req.body.age < 18) return res.status(400).json({message: "El usuario debe ser mayor de edad."});
    if(!validateEmail(req.body.email)) return res.status(400).json({message: "Correo inválido"});
    const updatedUser = User.updateUser(id, user);
    if (!updatedUser) return res.status(404).json({message: "No se encontró el usuario"});
    return res.status(200).json({message: "Usuario actualizado con éxito."});
}

//Función para validar correos (en caso haya algo dentro, si esta vacío retorna true)
function validateEmail(email){
    if(!email) return true;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

//Si en lugar de exports. usas function
// module.exports = { findAll, findById, addUser, updateUser }