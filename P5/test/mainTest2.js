const Punto = require('/Users/diego/Library/Mobile Documents/com~apple~CloudDocs/Clases/Programación/JS/P5/Punto.js');
const assert = require('assert');

// Descripción de las pruebas que se realizan aquí
describe('Prueba de distancia()', function () {
  var p1 = new Punto(0, 0);
  var p2 = new Punto(3, 4);

  // Prueba concreta
  it('la distancia de p1 a p2 es 5', function (hecho) {
    assert.equal(p1.distancia(p2), 5);
    hecho();
  });

  // Prueba concreta
  it('la distancia de p2 a p1 es 5', function (hecho) {
    assert.equal(p2.distancia(p1), 5);
    hecho();
  });

  // Prueba concreta
  it('la distancia de p1 a p1 es 0', function (hecho) {
    assert.equal(p1.distancia(p1), 0);
    hecho();
  });
});
