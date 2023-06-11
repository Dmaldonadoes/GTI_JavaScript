// .....................................................................
// ReglasREST.js
// .....................................................................
module.exports.cargar = function (servidorExpress, laLogica) {
    // .......................................................
    // GET /prueba
    // .......................................................
    servidorExpress.get("/prueba/", function (peticion, respuesta) {
        console.log(" * GET /prueba ")
        respuesta.send("¡Funciona!")
    }) // get /prueba
    // .......................................................
    // GET /longitud/<palabra>
    // .......................................................
    servidorExpress.get(
        "/longitud/:palabra",
        function (peticion, respuesta) {
            console.log(" * GET /longitud ")
            var palabra = peticion.params.palabra
            var solucion = { palabra: palabra, longitud: palabra.length }
            respuesta.send(JSON.stringify(solucion))
        }) // get /longitud
    // .......................................................
    // GET /dividir?a=<num>&b=<num>
    // .......................................................
    servidorExpress.get(
        "/dividir",
        function (peticion, respuesta) {
            console.log(" * GET /dividir ")
            var a = peticion.query.a
            var b = peticion.query.b
            if (isNaN(a) || isNaN(b) || b == 0) {
                // si a o b no son números, o b es 0
                // no se puede dividir
                // (400 = bad request)
                respuesta.status(400).send(" no puedo dividir ");
                return
            }
            var solucion = { a: a, b: b, division: a / b }
            respuesta.send(JSON.stringify(solucion))
        }) // get /dividir
    // .......................................................
    // POST /alta
    // .......................................................
    servidorExpress.post(
        "/alta",
        function (peticion, respuesta) {
            console.log(" * POST /alta ")
            console.log(peticion.body)
            var datos = JSON.parse(peticion.body)
            console.log(datos)
            console.log(datos.dni)
            console.log(datos.nombre)
            console.log(datos.apellidos)
            // supuesto procesamiento
            laLogica.insertarPersona(datos)
        }
    )


    // .......................................................
    // POST /asignatura
    // .......................................................
    servidorExpress.post(
        "/asignatura",
        function (peticion, respuesta) {
            console.log(" * POST /asignatura ")
            console.log(peticion.body)
            var datos = JSON.parse(peticion.body)
            console.log(datos)
            //var datos = peticion.body
            console.log(datos.nombre)
            console.log(datos.codigoAsignatura)
            laLogica.insertarAsignatura(datos)
        }
    )

    // .......................................................
    // POST /Matricula
    // .......................................................
    servidorExpress.post(
        "/matricula",
        function (peticion, respuesta) {
            console.log(" * POST /matricula ")
            console.log(peticion.body)
            var datos = JSON.parse(peticion.body)
            console.log(datos)
            //var datos = peticion.body
            console.log(datos.dni)
            console.log(datos.codigo)
            laLogica.insertarMatricula(datos)
        }
    )




    //GET/persona/<dni>
    servidorExpress.get(
        "/persona/:dni",
        async function (peticion, respuesta) {
            console.log("* GET/persona")
            var dni = peticion.params.dni
            var res = await laLogica.buscarPersonaConDNI(dni)
            if (res.length != 1) {
                //404 not found
                respuesta.status(404).send("no encontré dni: " + dni)
                return
            }
            console.log(res)
            respuesta.send(JSON.stringify(res))
        }
    )

    //GET/asignatura/<codigo>
    servidorExpress.get(
        "/asignatura/:codigoAsignatura",
        async function (peticion, respuesta) {
            console.log("* GET/asignatura")
            var codigoAsignatura = peticion.params.codigoAsignatura
            var res = await laLogica.buscarAsignaturaConCodigo(codigoAsignatura)
            if (res.length != 1) {
                //404 not found
                respuesta.status(404).send("no encontré asignatura: " + codigoAsignatura)
                return
            }
            console.log(res)
            respuesta.send(JSON.stringify(res))
        }
    )

    //GET/matricula/<codigo>
    servidorExpress.get(
        "/matriculaCodigo/:codigoAsignatura",
        async function (peticion, respuesta) {
            console.log("* GET/matricula")
            var codigoAsignatura = peticion.params.codigoAsignatura
            var res = await laLogica.buscarMatriculaConCodigoAsignatura(codigoAsignatura)
            /*if (res.length != 1) {
                //404 not found
                respuesta.status(404).send("no encontré Matrícula en: " + codigoAsignatura)
                return
            }*/
            console.log(res)
            respuesta.send(JSON.stringify(res))
        }
    )

    //GET/matricula/<apellidos>
    servidorExpress.get(
        "/matriculaApellidos/:apellidos",
        async function (peticion, respuesta) {
            console.log("* GET/asignatura")
            var apellidos = peticion.params.apellidos
            var res = await laLogica.buscarAsignaturasMatriculadasConApellidos(apellidos)
            /*if (res.length = 0) {
                //404 not found
                respuesta.status(404).send("no encontré Matrícula para: " + apellidos)
                return
            }*/
            console.log(res)
            respuesta.send(JSON.stringify(res))
        }
    )


}//()
// .....................................................................
// .....................................................................