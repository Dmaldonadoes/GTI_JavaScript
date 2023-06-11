// ........................................................
// mainTest1.js
// ........................................................
const Logica = require( "../logica.js" )
var assert = require("assert")
// ........................................................
// main ()
// ........................................................
describe("Test 4: Buscar una Matrícula", function () {
    // ....................................................
    // ....................................................
    var laLogica = null
    // ....................................................
    // ....................................................
    it("conectar a la base de datos", function (hecho) {
        laLogica = new Logica(
            "../bd/datos.bd",
            function (err) {
                if (err) {
                    throw new Error("No he podido conectar con datos.db")
                }
                hecho()
            })
    }) // it

    // ....................................................
    // ....................................................
    it("borrar todas las filas", async function () {
        await laLogica.borrarFilasDeTodasLasTablas();
    }) // it
    // ....................................................
    // ....................................................
    it("puedo buscar una Matricula con el apellido",
        async function () {
            await laLogica.insertarPersona(
                {
                    dni: "1234A", nombre: "Pepe",
                    apellidos: "Velasco"
                })
            await laLogica.insertarAsignatura(
                {
                    nombre: "Redes", codigoAsignatura: 99
                })
            await laLogica.insertarMatricula(
                {
                    dni: "1234A", codigo: 99
                })
            var res1 = await laLogica.buscarAsignaturasMatriculadasConApellidos("Velasco")
            assert.equal(res1.length, 1, "¿no hay un resulado?")
            assert.equal(res1[0].codigo, 99, "¿no es 00?")


        }) // it


    it("cerrar conexión a la base de datos",
        async function () {
            try {
                await laLogica.cerrar()
            } catch (err) {
                // assert.equal( 0, 1, "cerrar conexión a BD fallada: " + err)
                throw new Error("cerrar conexión a BD fallada: " + err)
            }
        }) // it
}) // describe
