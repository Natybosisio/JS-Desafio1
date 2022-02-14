/*Variables Globales*/
let dia = "";
let precio = "1200";
let hora = "";
let CantidadDeHoras = "";
let CantidadReservas = "";

alert("Usted puede reservar para la semana del 14 al 19 de febrero de 2022");
/*Pondria una opción para que se actualice la fecha semana a semana, y 
en futuro la idea es que sea con un calendario y hagan click sobre el dia */

CantidadReservas = parseInt(prompt("Cuantas reservas desea realizar?"));

for(i = 0 ; i < CantidadReservas ; i++){


function listado() {

    dia = prompt("Elija el dia que desea alquilar:  \n - Lunes\n -Martes\n -Miercoles\n -Jueves\n-Viernes\n -Sabado");

    if(dia == "Lunes" || dia == "Martes" || dia == "Miercoles" || dia == "Jueves" || dia == "Viernes" || dia == "Sabado"){
        horarios();
        mensaje();
        caja();
    }
    else{
        alert("Ingrese una opcion correcta");
        listado();
    }
}

/*Funciones*/
function horarios() 
{
    hora = prompt("Ingrese el horario que desea, entre las 8Am y las 22hs");
      
    if (hora >= 8 && hora < 22) {
        CantidadDeHoras = prompt("Cuantas horas desea alquilar?");
        alert("El precio a abonar es de $" + precio * CantidadDeHoras);
    }
    else if (hora < 8 || hora >22) {
        alert("Nos encontramos cerrados");
        horarios();
    }
    else{
        alert("Ingrese un horario valido");
        horarios();
    }
    
}

function mensaje(){

    let confirmacion = prompt("desea confirmar? \n - Si\n -No");

    switch(confirmacion){
       
    case "Si":
      alert("Usted reservo" + " " + dia + " " + hora + "hs, Gracias por elegirnos");
    break;
  
    case "No": 
        alert("Su reserva no fue registrada");
    break;

    default:
        alert("La opcion no es correcta");
        mensaje();
        break;
        
}
}

function caja(){
    let TotalCaja = parseInt(precio * CantidadDeHoras);
    
    console.log (" Ingreso a la caja" + " " + TotalCaja);
}

listado();
} 