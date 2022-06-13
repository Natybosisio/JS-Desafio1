
alert("Usted puede reservar para la semana del 13 al 18 de junio de 2022");
/*Quiesiera una opción para que se actualice la fecha semana a semana, y 
en el futuro la idea es que sea con un calendario y hagan click sobre el dia */

//ESTA FUNCION ES PARA QUE EL USUARIO HAGA SU RESERVA
function reservaUsuario() {
        dia = prompt("Elija el dia que desea alquilar:  \n - Lunes\n -Martes\n -Miercoles\n -Jueves\n-Viernes\n -Sabado").toLowerCase();
        hora = prompt("Ingrese el horario que desea, entre las 8Am y las 22hs");
        nombre = prompt("¿como te llamas?")
        dni = prompt("Ingrese su DNI/CEDULA")
        let existeReserva = buscarCoincidencia(dia, hora)
      

        if (existeReserva) {
            alert("Disculpa ese dia y horario ya esta reservado, vuelve a intentarlo")
            reservaUsuario()
        } else {
            citaTemporal = new Reserva(dia, hora, nombre, dni)
            reservas.push(citaTemporal)
            imprimirCitasAgendadas()
            cajaReservas()
            confirmar()
            return
        }
    }
reservaUsuario()

    


//Con esta funcion verificaremos si el dia y la hora dados por el usuario ya que sencuentran reservados.
function buscarCoincidencia(dia, hora) {
    let existeCita = false

    for (const citaAux of reservas) {
        citaAux.informacion()

        existeCita = citaAux.verificarExistencia(dia, hora)

        if (existeCita) {
            alert("Esa fecha ya esta reservada: " + citaAux.dia + ", " + citaAux.hora);
            break

        }

    }
    return existeCita
}


//Funcion para recorrer el arreglo de reservas
function imprimirCitasAgendadas() {
    for (const citaAux of reservas) {
        citaAux.informacion()
    }
}
// PARA INCLUIR EL PRECIO
function cajaReservas() {
    for (const caja of reservas) {
        let ingresar = caja.ingresarDinero()
        alert("el total a pagar es: $" + ingresar)
        break
    }

}

//todavia NO LA ESTOY USANDO
function verificarReservasUsuario(dni) {
    let existeReserva = prompt("ingrese su dni:")

    for (const dniR of reservas) {
        dniR.verificarReserva()

        existeReserva = dniR.verificarReserva(dni)

        if (existeReserva) {
            alert("usted reservo: " + dniR.dia + ", " + dniR.hora);
            break
        }
    }
}
// verificarReservasUsuario()


function confirmar() {
    let confirmacion = prompt("desea confirmar? \n - Si\n -No").toLowerCase();
    switch (confirmacion) {
        case "si":
            alert("registramos su reserva, Gracias por elegirnos");
            break;

        case "no":
            alert("Su reserva no fue registrada");
            break;

        default:
            alert("La opcion no es correcta");
            confirmar();
            break;
    }

}


   
   
// //ESTO ERA LO QUE TENIA ANTES Y QUIERO INTENTAR REPLICARLO 

// function reservar() {
//   
//         dia = prompt("Elija el dia que desea alquilar:  \n - Lunes\n -Martes\n -Miercoles\n -Jueves\n-Viernes\n -Sabado");
    
//         if (dia == "Lunes" || dia == "Martes" || dia == "Miercoles" || dia == "Jueves" || dia == "Viernes" || dia == "Sabado") {
//             horarios();
//             confirmar();
//             caja();
//         }
//         else if (dia == "Domingo") {
//             alert("Nos encontramos cerrados");
//             reservar();
//         }
//         else {
//             alert("Ingrese una opcion correcta");
//             reservar();
//         }
//     }
    
// function horarios() {
    
//         hora = prompt("Ingrese el horario que desea, entre las 8Am y las 22hs");
//         if (hora >= 8 && hora < 22) {
//             alert("La reserva es de 1hs reloj")
//             alert("El precio a abonar es de $" + precio);
//         }
//         else if (hora < 8 || hora > 22) {
//             alert("Nos encontramos cerrados");
//             horarios();
//         }
//         else {
//             alert("Ingrese un horario valido");
//             horarios();
//         }
//     }   