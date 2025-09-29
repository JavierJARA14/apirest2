//Importo express junto con las rutas
const express = require("express");
const userRoutes = require("./routes/user.routes");
const app = express();

//Devuelve un ok cuando utiliza la ruta base
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({message: "ok"});
})

//Define la ruta de las api y usa un puerto para un host local
app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})