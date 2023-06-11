// ........................................................
// mainTest1.js
// ........................................................
const Logica = require( "../logica.js" )
var assert = require("assert")
// ........................................................
// main ()
// ........................................................
describe("Test 3: insertar una Matrícula", function () {
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
    it("puedo insertar una Matricula",
        async function () {
            await laLogica.insertarPersona(
                {
                    dni: "1234A", nombre: "Pepe",
                    apellidos: "García Pérez"
                })
            await laLogica.insertarAsignatura(
                {
                    nombre: "Redes", codigoAsignatura: "99"
                })
            await laLogica.insertarMatricula(
                {
                    dni: "1234A", codigo: "99"
                })
            var res1 = await laLogica.buscarMatriculaConDNI("1234A")
            assert.equal(res1.length, 1, "¿no hay un resulado?")
            assert.equal(res1[0].codigo, "99", "¿no es 99?")
            assert.equal(res1[0].dni, "1234A", "¿no es 1234A?")

            var res2 = await laLogica.buscarMatriculaConCodigoAsignatura("99")
            assert.equal(res2.length, 1, "¿no hay un resulado?")
            assert.equal(res2[0].codigo, "99", "¿no es 99?")
            assert.equal(res2[0].dni, "1234A", "¿no es 1234A?")

        }) // it

    it("no puedo insertar una persona con dni que ya está",
        async function () {
            var error = null
            try {
                await laLogica.insertarPersona
                await laLogica.insertarMatricula(
                    {
                        dni: "54024103R", codigo: "01"

                    })
            } catch (err) {
                error = err
            }
            assert(error, "¿Ha insertado el dni que ya estaba 1234A? (¿No ha pasado por el catch()?")
        }) // it
    // ....................................................
    // ....................................................
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
