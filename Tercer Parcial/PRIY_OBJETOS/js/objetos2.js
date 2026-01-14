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

