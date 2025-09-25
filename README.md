# API REST – Sistema de Tareas

Este proyecto es una **API REST** para un sistema de tareas utilizando **Node.js** con **Express**, siguiendo el patrón **MVC** (Modelo-Vista-Controlador). Permite **crear, leer, actualizar y eliminar tareas**, así como marcar tareas como completadas.

---

## Estructura del Proyecto

- **Modelos (`models`)**: Manejan los datos de las tareas, realizando operaciones como crear, actualizar, eliminar y buscar tareas en la "base de datos" (un arreglo en memoria).  
- **Controladores (`controllers`)**: Contienen la lógica que conecta los modelos con las rutas. Reciben las solicitudes HTTP, llaman a las funciones del modelo y devuelven las respuestas.  
- **Rutas (`routes`)**: Definen los endpoints de la API y determinan qué controlador manejará cada solicitud.

---

## Funciones del Modelo

### `findAll()`
- Retorna **todas las tareas** en el sistema.  

### `findById(id)`
- Busca una tarea por su **ID**.  
- Retorna la tarea si existe o un mensaje de error en caso contrario.

### `addTask(title)`
- Crea una nueva tarea con el **título** proporcionado

### `updateTitle(id, title)`
- Actualiza el **título** de la tarea con el ID indicado.  

### `markCompleted(id)`
- Marca la tarea con el ID indicado como **completada** (`completed = true`).

### `removeTask(id)`
- Elimina la tarea con el ID indicado del arreglo de tareas.  

---

## Endpoints de la API

| Método | Ruta | Descripción |
|--------|-----|-------------|
| GET | `/tasks` | Obtiene todas las tareas. |
| GET | `/tasks/:id` | Obtiene una tarea por ID. |
| POST | `/tasks` | Crea una nueva tarea (body: `{ title: "..." }`). |
| PUT | `/tasks/:id` | Actualiza el título de una tarea (body: `{ title: "..." }`). |
| PUT | `/tasks/completed/:id` | Marca una tarea como completada. |
| DELETE | `/tasks/:id` | Elimina una tarea por ID. |

