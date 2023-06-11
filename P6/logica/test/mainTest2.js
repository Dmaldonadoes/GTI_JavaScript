// ........................................................
// mainTest1.js
// ........................................................
const Logica = require( "../logica.js" )
var assert = require("assert")
// ........................................................
// main ()
// ........................................................
describe("Test 2: insertar una Asignatura", function () {
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
    it("puedo insertar una asignatura",
        async function () {
            await laLogica.insertarAsignatura(
                {
                    nombre: "Redes", codigoAsignatura: "99"
                })
            var res = await laLogica.buscarAsignaturaConCodigo("99")
            assert.equal(res.length, 1, "¿no hay un resulado?")
            assert.equal(res[0].codigoAsignatura, "99", "¿no es 99?")
            assert.equal(res[0].nombre, "Redes", "¿no es Redes?")
        }) // it

    it("no puedo insertar una Asignatura con codigo que ya está",
        async function () {
            var error = null
            try {
                await laLogica.insertarAsignatura(
                    {
                        nombre: "Redes", codigoAsignatura: "99"
                    })
            } catch (err) {
                error = err
            }
            assert(error, "¿Ha insertado la asigatura? (¿No ha pasado por el catch()?")
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
