const express = require("express");
const path = require("path")
const app = express();

const publicPath = path.resolve(__dirname, "./public/images");
const publicPathStyles = path.resolve(__dirname, "./public/css");
//const publicPathViews = path.resolve(__dirname, "./public/views");
app.use("/imagenes", express.static(publicPath));
app.use("/css", express.static(publicPathStyles));
//app.use("/vistas", express.static(publicPathViews));


app.get("/", (req,res) => {

    res.sendFile(path.resolve("./views/home.html"));

})

app.post("/home", (req,res) => {

    res.sendFile(path.resolve("./views/home.html"));

})

app.get("/register", (req,res) => {

    res.sendFile(path.resolve("./views/register.html"));

})

app.get("/login", (req,res) => {

    res.sendFile(path.resolve("./views/login.html"));

})

app.listen(3000, () => console.log("Se ha levantado el servidor"));

