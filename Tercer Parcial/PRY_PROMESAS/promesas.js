//Promesas en javascript

//Se debe tener conocimiento de funciones callback y funciones tipo fecha

//Promesas son codigos que tienen varios estados
//Representacion de un objeto que simboliza el exito o el fracaso de un proceso
//Se ejecutan procesos asincronos
//Es la forma de programar una alerta de un evento a ejecutarse

//Ejecucion
//Al momento de lanzar una peticion para procesar un codigo en el caso que se ha resuelto
//de manera existosa y en el caso de que haya ocurrido algun error

//Creacion de un objeto de tipo promesa (dos parametros funciones de tipo callaback)
//una se ejecuta correctamente, y la otra que se ejecuta si existe algun error o fallo

let miPromesa = new Promise((resolved, rejected) => {
    let expresion = true;
    if(expresion)
        resolved('Se resolvio correctamente la promesa')
    else
        rejected('Ocurrio algun problema');
});

// miPromesa.then(
//     valor => console.log(valor),
//     error => console.log(error)  
// );

miPromesa.then(
    valor => console.log(valor)
).catch(
    error => console.log(error)
).finally(
    () => console.log('Proceso terminado')
);

//Uso de setTimeout y promesas ==> llamadas asincronas

let promesa = new Promise((resolver) =>  {
    console.log('Antes de ejectar la promesa...');
    setTimeout(() => resolver('Saludos con promesa y settimeout'), 5000);
    console.log('Despues de ejectar la promesa...');
});

promesa.then(
    valor => console.log(valor)
);

//Realizar un ejercicio que genere un numero random entre 0 y 10 , cuando el numero sea menor o igual a 5
//la promesa debe ser resuelta, en caso contrario debe ser rechazada.
//independientemente del resultado de la promesa mostrar el mensaje "promesa acabada o
// resuelta" para indicar que el proceso ha finalizado.
//resolver con settimeout 

let promesaRandom = new Promise((resolver, rechazar) => {
    let numero = Math.round(Math.random() * 10);
    console.log(`El numero es: ${numero}`);    
    setTimeout(() => {
        if(numero <= 5)
            resolver('El numero es menor o igual a 5, promesa resuelta');
        else
            rechazar('El numero es mayor a 5, promesa rechazada');
    }, 3000);
});

promesaRandom.then(
    valor => console.log(valor)
).catch(
    error => console.log(error)
).finally(
    () => console.log('Promesa acabada')
);

//simular el lanzamiento de un dado que genere un numero aletorio entre 1 y 6. la tarea consiste
//en usar una promesa para determinar si el numero es par o impar. 
//la promesa debe resolverse si el numero es par y rechazarse si es impar.
//con settimeout

let Dado = new Promise((resolver, rechazar) => {
    let numero = Math.floor(Math.random() * 6) + 1;
    console.log(`El numero del dado es: ${numero}`);
    setTimeout(() => {
        if(numero % 2 == 0)
            resolver('El numero es par, promesa resuelta');
        else
            rechazar('El numero es impar, promesa rechazada');

    }, 2000);
});

Dado.then(
    valor => console.log(valor)
).catch(
    error => console.log(error)
).finally(
    () => console.log('Lanzamiento finalizado')
);


