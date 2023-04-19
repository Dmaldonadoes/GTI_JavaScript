var unCoche = {
    color: "rojo",
    precio: 1234.56
}
//console.log(unCoche)
//console.log(unCoche.color)
//console.log(unCoche.precio)

var obj = {
    valor: 1234,
    metodo: function (a) {
        return this.valor * a
    },
    incrementar: function () {
        this.valor++
    }
} // obj

var pila = {
    valor: "12",
    apilar: function (a) {
        valorApilado = this.valor * a
    },
    desapilar: function (b) {
        valorApilado = this.valorApilado - b * this.valor
    },
}//pila

obj.incrementar()
var r = obj.metodo(2)
//console.log(r)

var unaPersona = {
    dni: "20123567R",
    nombre: "Juan",
    apellidos: "García Pérez",
    edad: 19,
    telefonos: [696234567, 676456123]
}//unaPersona

var horario = {
    lunes: ["física", "matemáticas", "inglés"],
    martes: ["programación", "matemáticas"],
    miercoles: ["ingles", "física"],
    jueves: ["física", "matemáticas", "inglés"],
    viernes: ["programación", "matemáticas"],
}//horario

var texto = JSON.stringify(horario)
//console.log(texto)
var juan = JSON.parse(texto)

var horarioConHora = {

    lunes: {
        0800: "Matemáticas",
        0900: "Inglés",
        1000: "Educación Física",
    },
    martes: {
        0800: "Lengua",
        0900: "Matemáticas",
        1000: "Ciencias Naturales",
    },
    miércoles: {
        0800: "Ciencias Sociales",
        0900: "Inglés",
        1000: "Matemáticas",
    },
    jueves: {
        0800: "Educación Física",
        0900: "Música",
        1000: "Lengua",
    },
    viernes: {
        0800: "Tecnología",
        0900: "Artes Plásticas",
        1000: "Ciencias Sociales",
    }
}//horarioConHora

//console.log(JSON.stringify(horarioConHora))

function buscarHorarioDeAsignatura(horario, asignatura) {
    let horarioDeAsignatura = {};

    // Recorremos los días del horario
    for (const dia in horario) {
        // Recorremos las horas de cada día
        for (const hora in horario[dia]) {
            // Si la asignatura coincide con la que estamos buscando, guardamos el día y la hora
            if (horario[dia][hora] === asignatura) {
                horarioDeAsignatura[dia] = hora;
            }
        }
    }

    // Devolvemos el objeto con el día y la hora de la asignatura buscada
    return horarioDeAsignatura;
}

//console.log(buscarHorarioDeAsignatura(horarioConHora,"Matemáticas"));

//escribir fichero de texto
var fs = require("fs")
fs.writeFile("/Users/diego/Desktop/nombre.txt", "Diego", function (err) {
    if (err) {
        console.log("hubo un problema al escribir en hola.txt")
    }
})

//leer fichero de texto
var fs = require("fs")
fs.readFile("/Users/diego/Desktop/nombre.txt", "utf8", function (err, contenido) {
    if (err) {
        console.log("hubo un problema al leer de hola.txt")
        return
    }
    console.log(contenido)
})





// –––––––––––––––––––––––––
// medirTemperatura() -> JSON{ hora: N, temperatura: R }
// Realiza una medida de temperatura y
// devuelve el valor junto con la hora
// –––––––––––––––––––––––––
function medirTemperatura() {
    //
    // completar: devolver un objeto con dos campos:
    // hora, con la hora actual; y
    // temperatura, un valor aleatorio entre 15 y 20
    //
    const horaActual = new Date().toLocaleTimeString();
    const temperaturaAleatoria = Math.floor(Math.random() * 6) + 15;
    return {
        hora: horaActual,
        temperatura: temperaturaAleatoria
    };
} // medirTemperatura

console.log(medirTemperatura())

function tomarMediciones(cuantas, mediciones, callback) {
    // cuantas:N -> tomarMediciones() -> Lista<JSON{hora:N, temperatura:R}>
    //
    // Toma la cantidad de mediciones indicadas llamando
    // cada segundo a medirTemperatura()
    if (cuantas == 0) {
        callback(mediciones)
        return
    }
    mediciones.push(medirTemperatura())
    setTimeout(function () {
        tomarMediciones(cuantas - 1, mediciones, callback)
    }, 100)
} //tomarMediciones

// –––––––––––––––––––––––––
// main()
// –––––––––––––––––––––––––
var medidas = []
//
// completar: llamar a tomarMediciones() para que nos devuelva
// 7 medidas de temperatura y guardar lo que nos devuelve
// en el ficheor "datos.txt" (habiendo convertido los datos
// a JSON previamente)
//

/*tomarMediciones(7,medidas, function(res){
    var fs = require("fs")
    fs.writeFile("/Users/diego/Library/Mobile Documents/com~apple~CloudDocs/Clases/Programación/Recursos/datos.txt", JSON.stringify(medidas), function (err) {
    if (err) {
        console.log("hubo un problema al escribir en hola.txt")
    }
})
});*/


//Programa para hacer cálculos con la temperatura

function procesardatos(callback) {
    var fs = require("fs")
    fs.readFile("/Users/diego/Library/Mobile Documents/com~apple~CloudDocs/Clases/Programación/Recursos/datos.txt", "utf8", function (err, contenido) {
        if (err) {
            console.log("hubo un problema al leer de datos.txt")
            return
        }
        callback(contenido)
        //console.log(contenido)
        //console.log(datosdetemperatura)
    })
}
procesardatos(function (contenido) {
    //console.log(contenido)
    //console.log(datosdetemperatura)
    console.log(temperaturaMedia(contenido))
    console.log(temperaturaMax(contenido))
    console.log(temperaturaMin(contenido))

});

function temperaturaMedia(datosenJSON) {
    const datos = JSON.parse(datosenJSON);
    let avgTemp = 0;
    //console.log(datos)

    for (let i = 0; i < datos.length; i++) {
        //console.log(i);
        //console.log(datos[i].temperatura)
        avgTemp = avgTemp + datos[i].temperatura / datos.length

    }

    return {
        temperaturaMedia: avgTemp,
    }
}


function temperaturaMax(datosenJSON) {
    const datos = JSON.parse(datosenJSON);
    let maxTemp = Number.MIN_VALUE;
    let horaMaxTemp = "";
    //console.log(datos)

    for (let i = 0; i < datos.length; i++) {
        //console.log(i);
        //console.log(datos[i].temperatura)
        if (datos[i].temperatura > maxTemp) {
            maxTemp = datos[i].temperatura;
            horaMaxTemp = datos[i].hora;
        }
    };

    return {
        temperaturaMax: maxTemp,
        hora: horaMaxTemp
    };
}

function temperaturaMin(datosenJSON) {
    const datos = JSON.parse(datosenJSON);
    let minTemp = Number.MAX_VALUE;
    let horaMinTemp = "";
    //console.log(datos)

    for (let i = 0; i < datos.length; i++) {
        //console.log(i);
        //console.log(datos[i].temperatura)
        if (datos[i].temperatura < minTemp) {
            minTemp = datos[i].temperatura;
            horaMinTemp = datos[i].hora;
        }
    };

    return {
        temperaturaMin: minTemp,
        hora: horaMinTemp
    };
}


