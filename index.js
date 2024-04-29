// Servidor express
const express = require('express')
const app = express()
app.listen(3000, () => {console.log('El servidor está inicializado en el puerto 3000')
})

//Carpeta publica assets 
app.use(express.static("assets"));
app.get("/", (req, res) => {
res.sendFile(__dirname + '/index.html')
})

// Objeto.
const usuarios = ["Juan", "Jocelyn", "Astrid", "Maria", "Ignacia", "Javier", "Brian"]

//Ruta usuarios
app.get("/abracadabra/juego/:usuario", (req, res) => { 
    const usuario = req.params.usuario;
    usuarios.includes(usuario) ? res.sendFile(__dirname + '/index.html') : res.sendFile(__dirname + '/who.html');
});

app.get("/abracadabra/usuarios", function (req, res) {
res.send({ usuarios });
});

//Ruta Conejito o Voldemort
app.get("/abracadabra/conejito/:n", (req, res) => {
    const n = Math.floor(Math.random() * 4);
    const numero = parseInt(req.params.n);
    if (numero === n) {
        res.sendFile(__dirname + '/conejito.html');
    } else {
        res.sendFile(__dirname +'/voldemort.html');
    }
});

//Página no encontrada al equivocarse en la ruta
app.get("*", (req, res) => {
 res.sendFile(__dirname + '/pagnotfounder.html');});