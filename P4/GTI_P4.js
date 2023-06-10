// –––––––––––––––––––––––––––––––-
// –––––––––––––––––––––––––––––––-
var elAsiento = "nadie" // variable global (mala idea)
// –––––––––––––––––––––––––––––––-
// Texto -> cambiarNombre()
//
// Tras un intervalo, cambia el valor de la variable
// global (mala idea) elAsiento.
// –––––––––––––––––––––––––––––––- 
function cambiarNombre(nombre) {
    setTimeout(function () {
        console.log(" *** elAsiento es para: " + nombre + "***")
        elAsiento = nombre
    }, 100)
} // ()
// –––––––––––––––––––––––––––––––-
// Texto -> hacerReserva()
// colateralmente, cambia la variable global (mala idea) 
// –––––––––––––––––––––––––––––––-
function hacerReserva(nombre) {
    if (elAsiento == "nadie") {
        cambiarNombre(nombre)
        return
    }
} // ()
// –––––––––––––––––––––––––––––––-
// main
// –––––––––––––––––––––––––––––––-
console.log("Intento reservar para juan.")
console.log("Como es el primero en reservar, el asiento ")
console.log("debería ser para él")
hacerReserva("juan")
console.log("Intento reservar para pepe.")
hacerReserva("pepe")
//
// Sin embargo, al final, ¿qué vale elAsiento?
//
setTimeout(() => console.log("elAsiento finalmente es para " + elAsiento), 1000)

// –––––––––––––––––––––––––––––––-
// –––––––––––––––––––––––––––––––-
// –––––––––––––––––––––––––––––––-
// R -> porDos() -> R (versión con callback) // –––––––––––––––––––––––––––––––-
function porDos(n, callback) {
    setTimeout(function () {
        callback(n * 2)
    }, 1000)
} // ()
// –––––––––––––––––––––––––––––––-
// main()
// –––––––––––––––––––––––––––––––-
//  Algoritmo:
//       a <- calcular el doble 3
//       b <- calcular el doble 4
//       c <- calcular el doble 5
// Sumar a+b+c porDos( 3, function( a ) {
porDos(4, function (b) {
    porDos(5, function (c) {
        console.log(a + b + c)
    })
})

// –––––––––––––––––––––––––––––––-
// R -> porDos() -> R (versión con promesa) 
// –––––––––––––––––––––––––––––––- 
function porDos(n, callback) {
    var prom = new Promise(function (resolver, rechazar) {
        setTimeout(function () {
            resolver(n * 2)
        }, 1000)
    })
    return prom
} // ()
// –––––––––––––––––––––––––––––––- 
// main()
// –––––––––––––––––––––––––––––––- 
var p = porDos(3)
p.then(function (a) {
    console.log("el resultado de 2*3 es " + a)
})

// –––––––––––––––––––––––––––––––-
// R -> porDos() -> R (versión con promesa)
// –––––––––––––––––––––––––––––––- 
function porDos(n) {
    var prom = new Promise(function (resolver, rechazar) {
        setTimeout(function () {
            resolver(n * 2)
        }, 300)
    })
    return prom
} // ()
// –––––––––––––––––––––––––––––––- 
// main()
// –––––––––––––––––––––––––––––––- 
var a
var b
var c
porDos(3) // pido calcular 2*3
    .then(function (r) { // cuando esté, entonces ... 
        a = r // guardo el resultado
        return porDos(4) // pido calcular 2*4
    })
    .then(function (r) { // cuando esté, entonces ...
        b = r // guardo el resultado
        return porDos(5) // pido calcular 2*5 
    })
    .then(function (r) { // cuando esté, entonces ...
        c = r // guardo el resulatdo
        return (a + b + c) // hago la suma de todo y devuelvo el valor
    })
    .then(function (total) { // cuando esté, entonces ...
        console.log("total = " + total)
    })

// –––––––––––––––––––––––––––––––-
// R -> porDos() -> R (versión con promesa) 
// –––––––––––––––––––––––––––––––- 
function porDos(n) {
    var prom = new Promise(function (resolver, rechazar) {
        setTimeout(function () {
            resolver(n * 2)
        }, 300)
    })
    return prom
} // ()
// –––––––––––––––––––––––––––––––- 
// –––––––––––––––––––––––––––––––- 
async function hacerUnaSuma() {
    var a = await porDos(3) // llamo  a calcular 2*5 y espero
    var b = await porDos(4) // llamo  a calcular 2*4 y espero
    var c = await porDos(5) // llamoa calcular 2*3 y espero
    // Hago la suma de todo y devuelvo el valor.
    // En realidad devuelve una promesa con el valor // resuelto y guardado dentro
    return (a + b + c)
} // ()
// –––––––––––––––––––––––––––––––-
// main()
// –––––––––––––––––––––––––––––––- 
hacerUnaSuma().then(function (total) {
    console.log(" total = " + total)
})