//Objetos en javascript
//Es una coleccion de pares de llave y valor(entidad) independiente con sus propiedades y valores.
//claves y valores

// Las claves son cadenas o simbolos(unicos)
// Los valores pueden ser de cualquier tipo: numericos, cadenas, funciones, otros objetos

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan.perez@gmail.com',
    edad: 28
}
console.log(persona.nombre);

let persona2 = {
    nombre: 'Maria',
    apellido: 'Aldaz',
    email: 'mariaa@gmail.com',
    edad: 28,
    nombreCompleto: function(){  
        return this.nombre + ' ' + this.apellido;
    }

}
console.log(persona2.nombreCompleto());

const persona3 = {
    nombre: 'Juan',
    edad: 25,
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}
console.log(persona3.nombre);
persona3.saludar();

//Objeto a traves de un constructor ==> Object

//Otra forma de crear un objeto vacio y agregarle propiedades posteriormente.

const persona4 = new Object();
persona4.nombre = 'Carlos';
persona4.edad = 56;
persona4.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
}
console.log(persona4.nombre);
console.log(persona4.edad);
persona4.saludar();

//utilizando la clase Object.create()
//permite crear un nuevo objeto basado en un prototipo

const prototipoPersona = {
    saludar: function(){
        console.log(`Hola, me llamo ${this.nombre}`);
    }
};
const persona5 = Object.create(prototipoPersona);
persona5.nombre = 'Luis';
persona5.saludar();

//utilizanco clases
//proporciona una sintaxis mas estructurada para crear objetos.

class Persona {
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}
const persona6 = new Persona('Ana', 30);
persona6.saludar();

//crear objetos con funciones constructoras
function Persona7(nombre, edad){
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function(){
        console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}
const persona8 = new Persona7('Jose', 33);
persona8.saludar();

//manipulacion los objetos
//1. agregar o modificar propiedades

let persona9 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan.perez@gmail.com',
    edad: 28
}
const persona10 = {nombre: 'Juan'};
persona10.edad = 30; //agregar nueva propiedad
persona10.nombre = 'Pedro';
console.log(persona10);

//2. eliminar propiedades
delete persona10.edad;
console.log(persona10);

//3. iterar o recorrer propiedades de un objeto
for(nombrePropiedad in persona){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}
for(let clave in persona){
    console.log(`${clave}: ${persona[clave]}`);
}

//4. verificar si una propiedad existe en un objeto
let persona11 = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'juan.perez@gmail.com',
    edad: 28
}
// console.log('nombre' in persona11);
// console.log(persona11.hasOwnProperty('edad'));
// console.log('telefono' in persona11);

//devuelve todas las keys de un objeto
//object.keys(objeto)
//devuelve un array con las claves de un objeto

// console.log(Object.keys(persona11));
// console.log(Object.values(persona11));
// console.log(Object.entries(persona11));

//copiar de un objeto a otro
const copiaPersona12 = Object.assign({}, persona11);
console.log(copiaPersona12);

//inmutar el añadir, crear o eliminar propiedades de un objeto
Object.freeze(persona11); //congela el objeto, no permite modificaciones

//Object.seal
//permite modificar las propiedades existentes pero no agregar o eliminar propiedades
Object.seal(persona11);

//crear un objeto Vehiculo con al menos 5 propiedades
//de forma dinamica una de las propiedades debe tener exonerado mayor al año 2017 debe el campo exonerado colocarse en si o no.
//de forma dinamica que pueda agregar 
//hacerle de forma dinamica sin let para ser de forma dinamica



let vehiculo = {
    marca: 'Pegeout',
    modelo: '208',
    año: 2010,
    color: 'Rojo',
    exonerado: function(){
        if(this.año > 2017){
            return 'Si';
        } else {
            return 'No';
        }
    }
}
console.log(vehiculo);

//puedo agregar o modificar propiedades
vehiculo.placa = 'P0P-204';
console.log(vehiculo);

//puedo modificar propiedades
vehiculo.color = 'Azul';
console.log(vehiculo);

//puedo eliminar propiedades
delete vehiculo.precio;
console.log(vehiculo);

//llamar al metodo exonerado
console.log(`El vehiculo es exonerado: ${vehiculo.exonerado()}`);



class Vehiculo {
    constructor(marca, modelo, año, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    exonerado() {
        if (this.año > 2017) {
            return 'Si';
        } else {
            return 'No';
        }
    }
}

// Propiedades dinámicas agregadas "por fuera"
Vehiculo.prototype.placa = '';
Vehiculo.prototype.infracciones = 0;

// Crear vehículos
const vehiculo1 = new Vehiculo('Toyota', 'Corolla', 2019, 'Blanco');
const vehiculo2 = new Vehiculo('Mazda', '3', 2015, 'Rojo');

// Asignar valores
vehiculo1.placa = 'ABC-123';
vehiculo1.infracciones = 3;

vehiculo2.placa = 'XYZ-789';
vehiculo2.infracciones = 1;

// Mostrar resultados
console.log(vehiculo1);
console.log(`Exonerado: ${vehiculo1.exonerado()}`);

console.log(vehiculo2);
console.log(`Exonerado: ${vehiculo2.exonerado()}`);
