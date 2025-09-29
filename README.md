# API REST II – Gestor de usuarios

Este proyecto es una **API REST** para un sistema gestor de usuarios utilizando **Node.js** con **Express** y **nodemon**, siguiendo el patrón **MVC** (Modelo-Vista-Controlador). Permite crear, leer y actualizar usuarios, así como marcar tareas como completadas.

---

## Estructura del Proyecto

- **Modelos (`models`)**: Manejan los datos de los usuarios, realizando operaciones; crear, actualizar y buscar tareas en la "base de datos" (un arreglo en memoria) ya sea todas o por id.  
- **Controladores (`controllers`)**: Contienen la lógica que conecta los modelos con las rutas. Reciben las solicitudes HTTP, llaman a las funciones del modelo y devuelven las respuestas.  
- **Rutas (`routes`)**: Definen los endpoints de la API y determinan qué controlador manejará cada solicitud.

---

## Funciones del Modelo

### `findAll()`
- Retorna **todos las usuarios** en el sistema.  

### `findById(id)`
- Busca un usuario por su **ID**.  
- Retorna la tarea si existe o un mensaje de error en caso contrario.

### `addUser(item)`
- Crea una nueva tarea con los datos del body. El id es autogenerado y active se pone por defecto en true.
- Valida que el nombre y edad no estén vacíos.
- Valida que el usuario sea mayor de edad.
- Valida que el correo sea válido (este campo sí puede estar vacío).

### `updateUser(id, data)`
- Actualiza todos los datos menos el id del usuario con el ID indicado.   
- Valida los datos enviados conforme a las validaciones de addUser.

---

## Endpoints de la API

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | `/api/users/` | Obtiene todos los usuarios. |
| GET | `/api/users/:id` | Obtiene una usuario por ID. |
| POST | `/api/users/` | Crea un nuevo usuario. |
| PUT | `/api/users/:id` | Actualiza los datos del usuario. |

