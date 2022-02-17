const express = require("express");
const env = require("dotenv");
const morgan = require("morgan")

env.config();
require("./database.js");
const app = express();
const port = process.env.PORT;

app.use(morgan("dev"))
app.use(express.json())

//rutas
app.use(`/api/users`, require('./routes/users.routes')) 

app.listen(port, ()=> {console.log(`ejecutando api en el puerto ${port}`)})


