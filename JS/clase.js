
debugger
//ACA ESTOY INTENTANDO MODIFICAR EL SHOP CON CLASES
class Producto{
    constructor(nombre, precio, descuento)
    {
        this.nombre = nombre;
        this.precio = precio;
        this.descuento = 1.10;
    }
   PrecioBonificado(){
        let PrecioD = this.precio * this.descuento; 
        return PrecioD;}

   NuevaCompra(){
        let ingreso = prompt("que producto desea comprar:\n raqueta \n grip");
        
        if(ingreso === productoR){
            cantidad = parseInt(prompt("cuantas desea comprar"))
            console.log("Usted va a llevar", cantidad, productoR, "el total a pagar es", "$", (parseFloat(precio) * cantidad))
            console.warn("Si abona por tranferencia, tiene un 10% de descuento")
            confirma = confirm("Desea abonar por tranferencia")
            }
         else if(ingreso === productoG){
            cantidad = parseInt(prompt("cuantas desea comprar"))
            console.log("Usted va a llevar", cantidad, productoG, "el total a pagar es", "$", (parseFloat(precio) * cantidad))
            console.warn("Si abona por tranferencia, tiene un 10% de descuento")
            confirma = confirm("Desea abonar por tranferencia")
            PrecioBonificado()
        }
         else(ingreso !== productoR || productoG)
         console.error("no contamos con", " ", ingreso);
    }
        
     
}

const productoR = new Producto ("raqueta", 10000);
const productoG = new Producto ("Grip", 200);


