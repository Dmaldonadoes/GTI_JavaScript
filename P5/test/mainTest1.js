const Punto = require("/Users/diego/Library/Mobile Documents/com~apple~CloudDocs/Clases/Programación/JS/P5/Punto.js");
const assert = require("assert");

// Descripción de las pruebas que se realizan aquí
describe("Prueba constructor y getters", function () {
  // Configuración previa a las pruebas
  before(function (hecho) {
    console.log("Esto ocurre antes de los it()");
    hecho(); // Llamo a esta función para continuar
  });

  // Prueba concreta
  it("pruebo getY()", function (hecho) {
    var p1 = new Punto(3, 4);
    // Comprobación: compruebo que getY() devuelve 4
    assert.equal(p1.getY(), 4);
    hecho();
  });

  // Prueba concreta
  it("pruebo getX()", function (hecho) {
    var p1 = new Punto(3, 4);
    // Vamos a simular que esto es un test asíncrono poniendo un timeout.
    setTimeout(function () {
      // Comprobación: compruebo que getX() devuelve 3
      assert.equal(p1.getX(), 3);
      hecho(); // Llamo a hecho para indicar que este test ha terminado
    }, 500);
  });

  // Configuración posterior a las pruebas
  after(function () {
    console.log("Esto ocurre después de los it()");
  });
});
