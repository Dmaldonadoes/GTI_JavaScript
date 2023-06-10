// ––––––––––––––-
// main.js
// ––––––––––––––-
// ––––––––––––––-
// requires
// ––––––––––––––-
var bib = require( "./bib.js" )
// ––––––––––––––-
// main ()
// ––––––––––––––-
var a = bib.porDos( 8 ) 
console.log( a )
console.log( bib.porTres( 3 ) )
// ––––––––––––––-
// bib.js
// ––––––––––––––-
// ––––––––––––––-
// R -> porDos() -> R
// ––––––––––––––-
module.exports.porDos = function ( a ) {
return a * 2 } // ()
// ––––––––––––––-
// R -> porTres() -> R
// ––––––––––––––-
module.exports.porTres = function ( a ) {
return a * 3 } // ()
