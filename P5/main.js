// ––––––––––––––-
// main.js
// ––––––––––––––-
// ––––––––––––––-
// requires
// ––––––––––––––-
/*var bib = require( "./bib.js" )
// ––––––––––––––-
// main ()
// ––––––––––––––-
var a = bib.porDos( 8 ) 
console.log( a )
console.log( bib.porTres( 3 ) )*/


// ––––––––––––––––-
// requires
// ––––––––––––––––-
const Punto = require( "./Punto.js" )
// ––––––––––––––––-
// main ()
// ––––––––––––––––-
var p1 = new Punto( 3, 4 )
var p2= new Punto (8,9)
console.log( p1.getX() )
console.log(p1.diferenciaPuntos(p2))




// ––––––––––––––––––––––––––––
// main.js
// ––––––––––––––––––––––––––––
// requires
const express = require( "express" )
// ––––––––––––––––––––––––––––
// main()
// ––––––––––––––––––––––––––––
// creo un servidor
const servidor = express()
// cuando llegue GET /hola
servidor.get("/hola", function( peticion, respuesta ) {
 respuesta.send( "Hola a todos")
})
// cuando llegue GET /adios
servidor.get("/adios", function( peticion, respuesta ) {
 respuesta.send( "Hasta pronto")
})
// arranco el servicio en el puerto 8080 
servidor.listen( 8080, function() {
    console.log( "Escuchando en el puerto 8080")
    console.log( "Conéctate a localhost:8080/hola" )
   }) 
