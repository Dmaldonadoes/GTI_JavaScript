// .....................................................................
// Logica.js
// .....................................................................
const sqlite3 = require("sqlite3");

module.exports = class Logica {


    // .................................................................
    // nombreBD: Texto
    // -->
    //    constructor ()  -->
    // .................................................................

    constructor(nombreBD, cb) {
        this.laConexion = new sqlite3.Database(nombreBD, 
            (err) => {
            if (!err) {
                this.laConexion.run("PRAGMA foreign_keys = ON");
            }
            cb(err);
        });
    }
// .................................................................
// nombreTabla:Texto
//     -->
//borrarFilasDe() -->
// .................................................................

    borrarFilasDe(tabla) {
        return new Promise((resolver, rechazar) => {
            this.laConexion.run(
                "delete from " + tabla + ";", 
                (err) => err ? rechazar(err) : resolver()
            );
        });
    }

// .................................................................
//          borrarFilasDeTodasLasTablas() -->
// .................................................................

    async borrarFilasDeTodasLasTablas() {
        await this.borrarFilasDe("Matricula");
        await this.borrarFilasDe("Asignatura");
        await this.borrarFilasDe("Persona");
    }

// .................................................................
// datos:{dni:Texto, nombre:Texto: apellidos:Texto}
//     -->
//insertarPersona() -->
// .................................................................

    insertarPersona(datos) {
        var textoSQL = 
        "insert into Persona values( $dni, $nombre, $apellidos );";
        var valoresParaSQL = {
            $dni: datos.dni,
            $nombre: datos.nombre,
            $apellidos: datos.apellidos,
        };
        return new Promise((resolver, rechazar) => {
            this.laConexion.run(textoSQL, valoresParaSQL, function (err) {
                ( err ? rechazar(err) : resolver() )
            });
        });
    }


    insertarAsignatura(datos) {
        var textoSQL = 
        "insert into Asignatura values( $nombre, $codigoAsignatura );";
        var valoresParaSQL = {
            $nombre: datos.nombre,
            $codigoAsignatura: datos.codigoAsignatura,
        };
        return new Promise((resolver, rechazar) => {
            this.laConexion.run(textoSQL, valoresParaSQL, function (err) {
                ( err ? rechazar(err) : resolver() )
            });
        });
    }

    insertarMatricula(datos) {
        var textoSQL = 
        "insert into Matricula values( $dni, $codigo );";
        var valoresParaSQL = {
            $dni: datos.dni,
            $codigo: datos.codigo,
        };
        return new Promise((resolver, rechazar) => {
            this.laConexion.run(textoSQL, valoresParaSQL, function (err) {
                ( err ? rechazar(err) : resolver() )
            });
        });
    }

// .................................................................
// dni:Texto
//      -->
//          buscarPersonaPorDNI() <--
//      <--
// {dni:Texto, nombre:Texto: apellidos:Texto}
// .................................................................

    buscarPersonaConDNI(dni) {
        var textoSQL = "select * from Persona where dni=$dni";
        var valoresParaSQL = { $dni: dni };
        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
                ( err ? rechazar(err) : resolver(res) )
            });
        });
    }


    buscarAsignaturaConCodigo(codigoAsignatura) {
        var textoSQL = "select * from Asignatura where codigoAsignatura=$codigoAsignatura";
        var valoresParaSQL = { $codigoAsignatura: codigoAsignatura };
        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
                ( err ? rechazar(err) : resolver(res) )
            });
        });
    }

    buscarMatriculaConDNI(dni) {
        var textoSQL = "select * from Matricula where dni=$dni";
        var valoresParaSQL = { $dni: dni };
        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
                ( err ? rechazar(err) : resolver(res) )
            });
        });
    }

    buscarMatriculaConCodigoAsignatura(codigo) {
        var textoSQL = "select * from Matricula where codigo=$codigo";
        var valoresParaSQL = { $codigo: codigo };
        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
                ( err ? rechazar(err) : resolver(res) )
            });
        });
    }

    buscarAsignaturasMatriculadasConApellidos(apellidos) {
        var textoSQL = "SELECT M.codigo FROM Matricula M JOIN Persona P ON M.dni = P.dni WHERE P.apellidos = $apellidos;";
        var valoresParaSQL = { $apellidos: apellidos };
        return new Promise((resolver, rechazar) => {
            this.laConexion.all(textoSQL, valoresParaSQL, (err, res) => {
                ( err ? rechazar(err) : resolver(res) )
            });
        });
    }
    
// .................................................................
//          cerrar() -->
// .................................................................

    cerrar() {
        return new Promise((resolver, rechazar) => {
            this.laConexion.close((err) => {
                err ? rechazar(err) : resolver();
            });
        });
    }
};
