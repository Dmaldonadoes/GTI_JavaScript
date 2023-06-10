function leerFichero(nombreFichero, callback) {
    var prom = new Promise(function (resolver, rechazar) {
        var fs = require("fs")
        fs.readFile("hola.txt", "utf8", function (err, contenido) {
            if (err) {
                console.log("hubo un problema al leer de hola.txt")
                return
            }
            console.log(contenido)
        })
    })
}

// –––––––––––––––––––––––––––––––
// main()
// ––––––––––––––––––––––––––––––-

