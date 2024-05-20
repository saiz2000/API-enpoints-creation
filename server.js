const express = require("express")
const app = express()
const { dbConection } = require("./db.js")
const cors = require("cors")

app.use(cors())

app.use("/pokemon",require("./src/routes/pokemon.router"))
app.use("/rickymorty",require("./src/routes/rickymorty.router"))
app.use("/starwars",require("./src/routes/starwars.router"))



dbConection()

app.listen(3000, function() {
    console.log("Servidor escuchando en el puerto 3000")})