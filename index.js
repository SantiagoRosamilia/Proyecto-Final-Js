
// Ingreso usuario:

const usuario = {}
const arrayUsuarios = []


let decisionUsuario = parseInt(prompt("Quiere añadir un usuario? \n 1-Si 2-No"))
while (decisionUsuario!=1 && decisionUsuario!=2) {
    decisionUsuario = parseInt(prompt("Error. Ingrese un numero existente. \n 1-Si 2-No"))
}
while (decisionUsuario==1) {
  
    usuario.nombre = prompt("Ingrese su nombre")
    usuario.apellido = prompt("Ingrese su apellido")
    usuario.gmail = prompt("Ingrese su gmail")
   
    arrayUsuarios.push(usuario)
    
    alert ("Gracias por confiar en nosotros "+ usuario.nombre+" !")
    decisionUsuario = 2
    console.log(usuario)
}

// Metodo de carrito:

let totalCompra = 0
let productoSeleccionado = parseInt(prompt("Que productos desea comprar? \n 1-Medallones de Lentejas \n 2-Medallones de Arvejas \n 3-Medallones de Porotos negros \n 4-brownies veganos \n 5-Docena de medallones (a eleccion)"))

let seguirComprando = true
let decisionDeCompra
let productos = []
let carrito = []
let nombreProductosCarrito = []
let contDocenaMedallones

const lentejas = {
  nombre:'Medallones de Lentejas',
  precio: 150
}
productos.push(lentejas)

const arvejas = {
  nombre:'Medallones de Arvejas',
  precio: 150,
}
productos.push(arvejas)

const porotosNegros = {
  nombre:'Medallones de Porotos negros',
  precio: 150
}
productos.push(porotosNegros)

const brownies = {
  nombre:'brownies veganos',
  precio: 800
}
productos.push(brownies)

const docenaMedallones = {
  nombre:'Docena de medallones ',   
  precio: 1500,   
  contDocenaMedallones: [] 
}
productos.push(docenaMedallones)

console.log(productos)



while (seguirComprando === true) {

  if (productoSeleccionado === 1) {
    carrito.push(productos[0]) } 
    
  else if (productoSeleccionado === 2) {
    carrito.push(productos[1]) } 
    
  else if (productoSeleccionado === 3) {
    carrito.push(productos[2]) } 
    
  else if (productoSeleccionado === 4) {
    carrito.push(productos[3]) }

  else if (productoSeleccionado === 5) {

    carrito.push(productos[4])
    for (let i= 0; i<=12; i++) {

      contDocenaMedallones = parseInt(prompt("Que medallones quieres meter? \n 1-Medallones de Lentejas \n 2-Medallones de Arvejas \n 3-Medallones de Porotos negros"))

      if (contDocenaMedallones === 1) {
        docenaMedallones.contDocenaMedallones.push(productos[0]) } 
      
      else if (contDocenaMedallones === 2) {
        docenaMedallones.contDocenaMedallones.push(productos[1]) } 
        
      else if (contDocenaMedallones === 3) {
        docenaMedallones.contDocenaMedallones.push(productos[2]) } 

      else{
        contDocenaMedallones = parseInt(prompt("Ingrese una opcion existente? \n 1-Medallones de Lentejas \n 2-Medallones de Arvejas \n 3-Medallones de Porotos negros"))
      }
    }
    
  }
    
  else {
    productoSeleccionado = parseInt(prompt("Disculpa, no contamos con ese producto. Elija uno que se encuentre disponible: \n 1-Medallones de Lentejas \n 2-Medallones de Arvejas \n 3-Medallones de Porotos negros \n 4-brownies veganos \n 5-Docena de medallones (a eleccion)"))
    continue
  }

  decision = parseInt(prompt('Quieres seguir agregando productos? 1.Si - 2.No'))

  if (decision === 1) {
    productoSeleccionado = parseInt(prompt("Que productos desea agregar? \n 1-Medallones de Lentejas \n 2-Medallones de Arvejas \n 3-Medallones de Porotos negros \n 4-brownies veganos \n 5-Docena de medallones (a eleccion)")) } 
    
  else if (decision === 2) {
    seguirComprando = false
  }

}

console.log(carrito)




for(let i=0;i<carrito.length;i++){
  totalCompra = totalCompra +carrito[i].precio
}

for(let i=0;i<carrito.length;i++){
  nombreProductosCarrito = nombreProductosCarrito +carrito[i].nombre + " \n"
}



for (const prod of carrito) {
  totalCompra = totalCompra +prod.precio
}




alert(`Este es su listado de productos.\n`+ nombreProductosCarrito + `  \nEl valor total de su compra es: `+ totalCompra +`.\nEspero que disfrute sus elecciones!`)





   

