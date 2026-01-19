//constructore en js

//si deseamos crear mas objetos del mismo tipo esto no se sera posible
//por ello se crean constructores

function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona("Juan", "Sanchez", "jsanchez@gmail.com");
console.log(padre);

let madre = new Persona("Laura", "Quintero", "lquintero@gmail.com");
console.log(madre);

padre.nombre = "Carlos";
console.log(padre);

//uso de prototype
Persona.prototype.tel = "0987644687";
Persona.prototype.direccion = 'Sangolqui'

console.log(madre.tel);
console.log(madre.direccion)
console.log(padre.direccion)

//Añadir un metodo del tipo prototype en persona
Persona.prototype.saludar = function(){
    console.log("Hola, soy " + this.nombre + "!");
};

let persona1 = new Persona("Diego");  

persona1.saludar();

//uso call

//este metdodo en JS permite invocar una funcion con un contexto .this especifico y argumentos individuales
//Funcion que queremos usar con diferente objetos

function saludar(){
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
}

const personaA = {nombre: "Ana",edad: 25};
const personaB = {nombre: "Carlos",edad: 30};

//usamos call para que la funcion 'saludar' se ejecute en el contexto de 'personaA'
saludar.call(personaA);

//usamos call para que la funcion 'saludar' se ejecute en el contexto de 'personaB'
saludar.call(personaB);

//crear un metodo dentro de esta funcion constructora para que persona B tiene atributos y la funcion comparta lo de persona A
//persona A compartira su metodo con persona B
//utilizando call

let personaC = {
    nombre: 'Luis', 
    apellido: 'Martinez',
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

let personaD = {
    nombre: 'Andres',
    apellido: 'Farias'
}

//para usar el metodo nombreCompleto que pertenece a Objeto personaC con los datos del objeto personaD  

console.log(personaC.nombreCompleto.call(personaD));

//Funciones CALLBACK
function imprimir(mensaje){
    console.log(mensaje);
}//funcion como argumento de otra funcion se convierte en una funcion de tipo callback

function sumar(a, b, funcionCallback){
    let res = a + b;
    funcionCallback(`Resultado: ${res}`);
}
sumar(5, 3, imprimir);

//Nivel de BDD

const getUsers = (callback) => {
    setTimeout(() => {
        const users = [
            { id: 1, name: 'Alice'},
            { id: 2, name: 'Bob'},
            { id: 3, name: 'Charlie' },
        ];

        callback(users);

    }, 1000);
}
getUsers((users) => {
    console.log('Users:', users);
});

//Crear una funcion en donde se instancia propiedades de producto como id, nombre, stock y precio y si el stokc ve el producto que cambia, entonces el precio debe cambiar, es decir, si llega a 0 se cambie el precio a 0, y si el stock es mayor a 0 entonces el precio vuelve a su valor original a traves de funciones callback
//actualizando inventario o inventario actualizado
//si realizo un cambio va a decir actualizando inventario
// Constructor
function Producto() {

  // Método asincrónico
  this.actualizarInventario = function (id, nombre, stock, precio, callback) {
    console.log('Actualizando inventario...');

    setTimeout(() => {
      // Las propiedades se crean AQUÍ
      this.id = id;
      this.nombre = nombre;
      this.stock = stock;
      this.precio = precio;
      this.precioOriginal = precio;

      // Regla de negocio
      if (this.stock <= 0) {
        this.precio = 0;
      }

      // Retorno del objeto actualizado
      callback(this);
    }, 2000);
  };
}

// ===================== USO =====================

// Crear instancia (vacía)
let producto1 = new Producto();

// Llamada asincrónica
producto1.actualizarInventario(1, 'Impresora', 1, 50, function (producto) {
  console.log(
    `ID:${producto.id}, Producto:${producto.nombre}, Stock:${producto.stock}, Precio:$${producto.precio}`
  );
});


