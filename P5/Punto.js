// Punto.js
module.exports = class Punto {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }
    
    diferenciaPuntos(b) {
        const diferenciaX = this.x - b.x;
        const diferenciaY = this.y - b.y;
        return new Punto(diferenciaX, diferenciaY);
    }

    distancia( otro ) {
        var dx = this.x-otro.x
        var dy = this.y-otro.y
        return Math.sqrt( dx*dx + dy*dy )
        }

};
