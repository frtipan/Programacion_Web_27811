//Palabra async a traves de funciones, la funcion esta obligada a recibir una promesa

//la funcion siempre devuelve una promesa

async function miFuncionconPromesa() {
    return 'Datos recibidos';
}
miFuncionconPromesa().then(
    valor => console.log(valor)
); 

async function miFuncionconPromesaAwait()  {
    let miPromesa = new Promise( (resolver) => {
        resolver('Promesa con Await');
    });
    console.log( await miPromesa );
}

miFuncionconPromesaAwait();

let FuncionconPromesaAwaitArrow = async () => {
    let miPromesa = new Promise( (resolver) => {
        resolver('Promesa con Await y arrow function');
    });
    console.log( await miPromesa );
}

FuncionconPromesaAwaitArrow();

//async await y timeout

async function funcionconSettimeout() {
    console.log('Proceso A');
    let miPromesa = new Promise( (resolver) => {
        setTimeout( () => resolver('Promesa con await y timeout'), 5000);
    });
    console.log( await miPromesa );
    console.log('Proceso C');
}
funcionconSettimeout();

//simular el ingreso de un usuario a un sistema, la funcion debe esperar 3 segundos
//ingresar el usuario y contraseña que son datos instanciados 
//si los datos son correctos imprimir qu el usuario ha ingresado correctamente 
//y si son incorrectos un mensaje de error
//que diga un mensaje final de proceso termina
//validar los datos
//async await con manejo de errores
//que diga un mensaje final de proceso terminado 



let usuario2 = 'admin';
let password2 = 'admin1234';

async function login(usuario, password) {
    console.log('Iniciando sesion');
    let miPromesa = new Promise( (resolver, rechazar) => {
        setTimeout( () => {
            if(usuario === 'admin' && password === 'admin1234') {
                resolver('Credenciales correctas');
            } else {
                rechazar('Credenciales incorrectas');
            }
        }, 3000);
    });
    try {
        console.log( await miPromesa );
    } catch (error) {
        console.log(error);
    }
        console.log("Proceso terminado");
}
login(usuario2, password2);



