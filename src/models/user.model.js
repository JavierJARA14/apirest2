//Agregamos esto para generar id random
const { randomUUID } = require("node:crypto");

//Modelo de datos
let users = [
    {id: randomUUID(), name: "Javier", email: "correo@example.com", active: true, age: 18},
    {id: randomUUID(), name: "Valentin", email: "correo2@example.com", active: false, age: 22}
];
//Funciones que manejan el modelo
function findAll(){
    return users;
}

function filterUser(filter = {}) {
  let result = users;

  if (filter.name) {
    const q = String(filter.name).toLowerCase();
    result = result.filter((item) => item.name.toLowerCase().includes(q));
  }
  if(filter.age) {
    const r = Number(filter.age);
    result = result.filter((item) => item.age === r);
  }
  if(typeof filter.active !== 'undefined') {
    let s ;
    if (filter.active === 'true'){
        s = true;
    }else if (filter.active === 'false'){
        s = false
    }
    result = result.filter((item) => item.active === s);
  }

  return result;

}

//?name=sra&active=false
function findById(id){
    return users.find((u) => u.id === id) || null;
}

function addUser(item){
    const user = {
        id: randomUUID(),
        name: item.name,
        email: item.email,
        age: item.age,
        active: true
    }
    users.push(user);
    return user;
}

function updateUser(id, data){
    const index = users.findIndex((u) => u.id === id);
    if(index == -1) return null;
    users[index] = {
        ...users[index],
        name: typeof data.name === "undefined" ? users[index].name : data.name,
        email: typeof data.email === "undefined" ? users[index].email : data.email,
        age: typeof data.age === "undefined" ? users[index].age : Number(data.age),
        active: typeof data.active === "undefined" ? users[index].active : Boolean(data.active),
    }
    return users[index];
}
//Exporta las funciones
module.exports = {findAll, findById, addUser, updateUser, filterUser};