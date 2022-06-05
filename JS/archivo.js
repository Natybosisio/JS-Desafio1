
//Variables Globales
let dia;
let precio = "1200";
let hora = "";
let cantidadDeHoras = "";
let cantidadReservas = "";

alert("Usted puede reservar para la semana del 06 al 11 de junio de 2022");
/*Quiesiera una opción para que se actualice la fecha semana a semana, y 
en el futuro la idea es que sea con un calendario y hagan click sobre el dia */

function reservar() {
//no me funciona el toLowerCase- quisiera que me pase a minuscula el resultado asi si escriben LUNES o Lunes lo toma como correcto igual!
    dia = prompt("Elija el dia que desea alquilar:  \n - Lunes\n -Martes\n -Miercoles\n -Jueves\n-Viernes\n -Sabado");

    if (dia == "Lunes" || dia == "Martes" || dia == "Miercoles" || dia == "Jueves" || dia == "Viernes" || dia == "Sabado") {
        horarios();
        confirmar();
        caja();
    }
    else if (dia = "Domingo") {
        alert("Nos encontramos cerrados");
        reservar();
    }
    else {
        alert("Ingrese una opcion correcta");
        reservar();
    }
}

function horarios() {

    hora = prompt("Ingrese el horario que desea, entre las 8Am y las 22hs");

    if (hora >= 8 && hora < 22) {
        alert("La reserva es de 1hs reloj")
        alert("El precio a abonar es de $" + precio);
    }
    else if (hora < 8 || hora > 22) {
        alert("Nos encontramos cerrados");
        horarios();
    }
    else {
        alert("Ingrese un horario valido");
        horarios();
    }
}

function confirmar() {

    let confirmacion = prompt("desea confirmar? \n - Si\n -No");

    switch (confirmacion) {

        case "Si":
            alert("Usted reservo" + " " + dia + " " + hora + "hs, Gracias por elegirnos");
            break;

        case "No":
            alert("Su reserva no fue registrada");
            break;

        default:
            alert("La opcion no es correcta");
            confirmar();
            break;
    }

}

/*Con esto quisiera hacer algo mas, que vaya sumando el total de ingreso x dia o algo asi, 
pero no se si es que aun no tengo las herramientas o no se me ocurre como hacerlo*/
function caja() {
    let totalCaja = parseInt(precio);
    console.log(" Ingreso a la caja" + " " + totalCaja);
}

reservar();

