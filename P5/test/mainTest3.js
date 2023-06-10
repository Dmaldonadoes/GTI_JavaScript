const Punto = require('/Users/diego/Library/Mobile Documents/com~apple~CloudDocs/Clases/Programación/JS/P5/Punto.js');
const assert = require('assert');

// Descripción de las pruebas que se realizan aquí
describe('Prueba de diferenciaPuntos()', function () {
  var p1 = new Punto(0, 0);
  var p2 = new Punto(3, 4);

  // Prueba concreta
  it('la diferencia de p1 a p2 es {x: -3, y: -4}', function (hecho) {
    assert.deepStrictEqual(p1.diferenciaPuntos(p2), new Punto(-3, -4));
    hecho();
  });

  // Prueba concreta
  it('la distancia de p2 a p1 es {x: 3, y: 4}', function (hecho) {
    assert.deepStrictEqual(p2.diferenciaPuntos(p1), new Punto(3, 4));
    hecho();
  });

  // Prueba concreta
  it('la distancia de p1 a p1 es {x: 0, y: 0}', function (hecho) {
    assert.deepStrictEqual(p1.diferenciaPuntos(p1), new Punto(0, 0));
    hecho();
  });
});

