var unCoche = {
    color : "rojo",
    precio : 1234.56
   }
   console.log( unCoche )
   console.log( unCoche.color )
   console.log( unCoche.precio )

   var obj = {
    valor : 1234,
    metodo : function( a ) {
   return this.valor * a },
   incrementar : function() { this.valor++
   }
   } // obj

   obj.incrementar()
var r = obj.metodo( 2 )
console.log( r )