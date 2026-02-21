//CONCEPTO

/*
Concepto: Fetch API es una interfaz moderna para realizar peticiones HTTP desde un navegador

FETCH API ==> Uso de Promesas 

*/

fetch('https://') // URL de la API o recurso al que se desea acceder
    .then(response => response.json()) // Procesar la respuesta y convertirla a JSON
    .then(data => console.log(data)) // Mostrar los datos en consola 
    .catch(error => console.error('Error:', error)); // Manejar errores

//Fetch retorna una promesa que se resuelve con el objeto Response de la solicitud
//para leer el cuerpo de un a determinadad respuesta 

//Merodos conocidos 
/*
.json() : para leer la respuesta y parsearla como JSON
.text() : para leer la respuesta como texto plano
.blob() : para leer la respuesta como un objeto Blob (usado para archivos binarios)
.formData() : para leer la respuesta como FormData
.arrayBuffer() : para leer la respuesta como un ArrayBuffer (usado para datos binarios)
*/

/* 
Importante:

fetch no lanza algún error por código HTTP que indique fallo (como 404 o 500). Tarea: Cuáles son los códigos HTTP que indican fallo DE PETICIONES en Http
fetch solamente falla la promesa si hay un error de red.
Si el servidor responde con un error 404, el código no va a ingresar al .catch(), solo fallaría al hacer JSON siempre y cuando el json
sea válido.

*/

async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
         console.log(data);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();

//async/await es una sintaxis moderna que trabaja con promesas de forma mas limpia - el codigo es mas legible

//verifica explicitamente responde.ok (que es un valor correcto solo si el esta esta entre 2xx)
//si hay un error 4xx, 5xx, ect, lanza un error y este lo captura en un catch()

//uso de get
//para recuperar datos de un servidor(lectura, no se modifica los datos)

//ejercicio: obtener los datos de los usuarios 

const BASE_URL2 = 'https://api.escuelajs.co/api/v1';

async function getUsers() {
    try {
        const response = await fetch(`${BASE_URL}/users`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        console.log('Usuarios: ', users);
    }   
    catch (error) {
        console.error('Fetch error:', error.message);
    }
}
getUsers();

/* 
fecth() hace una peticion GET por defecto
se verifica responde.ok para detectar errores HTTP(en get es muy dificil que atrape un error)
*/

//Post un nuevo recurso
//enviar al servidor los datos o la informacion para crear un nuevo recurso

//ejercicio: crear un nuevo Post
const BASE_URL3 = 'https://jsonplaceholder.typicode.com/';

async function createPost(title, body, id = 1){
    try {
        const newPost = {title, body, userID};

        const response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        if(!response.ok){
            throw new error(`HTTP Error status: ${response.status}`);
        }
        const createPost = await response.json();
        console.log('Post creado exisotosamente:', createPost);
        return createPost;

    } catch (error) {
        console.error('Fecth creating post: ', error.message);
    }
} 
createPost('Post actualizado', 'Este es el cuerpo del post fue acutalizado')


const BASE_URL2 = 'https://jsonplaceholder.typicode.com/';

async function createPost(title, body, userId = 1) {
    try {
        const newPost = { title, body, userId };

        const response = await fetch(`${BASE_URL2}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const createdPost = await response.json();
        console.log('Post creado exitosamente:', createdPost);
        return createdPost;
    } catch (error) {
        console.error('Error creating post:', error.message);
    }
}

createPost('Post actualizado', 'Este es el cuerpo del post fue actualizado', 1);


//get de cuantas categorias existe


//ejercico: hacer el mismo ejercicio anterior pero con esta esta API : https://api.escuelajs.co/api/v1/categories





// const BASE_URL2 = 'https://api.escuelajs.co/api/v1/categories';

// async function createPost(name, image) {
//     try {
//         const newCategories = { name, image };

//         const response = await fetch(`${BASE_URL2}/categories`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newCategories)
//         });
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const createdPost = await response.json();
//         console.log('Post creado exitosamente:', createdPost);
//         return createdPost;
//     } catch (error) {
//         console.error('Error creating post:', error.message);
//     }
// }

// createPost('Nueva Categoria', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKePNWHMeYLDaZ7RJr0t23SrrxbDKp534Mg&s');


const BASE_URL6 = 'https://api.escuelajs.co/api/v1';

async function createCategory(name, image) {
    try {
        const newCategory = { name, image };
        const response = await fetch(`${BASE_URL6}/categories`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCategory)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const createdCategory = await response.json();
        console.log('Categoría creada exitosamente:', createdCategory);
        return createdCategory;
    } catch (error) {
        console.error('Error creating category:', error.message);
    }
}

createCategory(
  'Tec',
  'https://placeimg.com/640/480/tech'
);


//Put
//Actualizar un registro completo (existenete) que reemplazara todos los campos.


const Base_Url5 = 'https://jsonplaceholder.typicode.com';

async function updatePost(id, title, body, userId){
    try {
        const updatedData = {title, body, userId};
        const response = await fetch(`${Base_Url5}/posts/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedData)
        });
        if(!response.ok){
            throw new Error(`HTTP Error status: ${response.status}`);
        }
        const updatedDataPost = await response.json();
        console.log('Post creado: ', updatedDataPost);
        return updatedDataPost;
    } catch (error) {
        console.log(`Error: `, error);
    }
}

updatePost(1, 'titulo actualizado', 'Contenido actualizado', 1);

//Metodo POST actualizar enviando un objeto

const BASE_URL7 = 'https://jsonplaceholder.typicode.com';

async function updatePostByObject(id, postData) {
    try {
        const response = await fetch(`${BASE_URL7}/posts/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const updatedPost = await response.json();
        console.log('Post actualizado mediante POST:', updatedPost);
        return updatedPost;
    } catch (error) {
        console.error('Error updating post:', error.message);
    }
}

// Ejemplo de uso: enviar un objeto completo
const postObject = {
    title: 'Nuevo título del post',
    body: 'Este es el nuevo contenido del post actualizado',
    userId: 1
};

updatePostByObject(1, postObject);




const userData = {
    name: 'Juan Perez',
    email: 'Juan@espe.edu.ec',
    password: '1234',
    avatar: 'https://picsum.photos/800'

};

const Base_Url6 = 'https://api.escuelajs.co/api/v1/users/';

const createPost = async(userData)=>{
    try {
        const response = await fetch(`${Base_Url6}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        if(!response.ok){
            throw new Error(`HTTP Error status: ${response.status}`);
        }
        const createdPost = await response.json();
        console.log('Post creado: ', createdPost);
        return createdPost;
    } catch (error) {
        console.log(`Error: `, error);
    }
}

createPost(userData);


//Delete
//eliminar un recurso del servidor
//siempre y cuando las reglas de negocio lo permita y este dentro de la BDD subyacente.

const BASE_URL5 = 'https://jsonplaceholder.typicode.com';

async function deletePost(id) {

    try {
        const response = await fetch(`${BASE_URL5}/posts/${id}`, {
            method: 'DELETE'
        });
        //En el delete, normalmente no hay cuerpo de respuesta 
        if (response.ok) {
            console.log(`Post${id} eliminado exitosamente`);
        }else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error deleting post:', error.message);
        return false;
        
    }
    
}

deletePost(1);

//


function handleResponse(response) {
    if (response.ok) return response;

    switch (response.status) {
        case 400:
            throw new Error('Solicitud incorrecta');
        case 401:
            throw new Error('No autorizado');
        case 403:
            throw new Error('Prohibido');
        case 404:
            throw new Error('No encontrado');
        case 500:
            throw new Error('Error del servidor');
        default:
            throw new Error(`Error HTTP: ${response.status}`);
    }
}

async function getUsers() {
    try {
        const response = await fetch(`${BASE_URL2}/users`);
        handleResponse(response);

        const users = await response.json();
        console.log('Usuarios:', users);
        return users;

    } catch (error) {
        console.error('Error GET:', error.message);
    }
}


async function createPost(title, body, userId = 1) {
    try {
        const newPost = { title, body, userId };

        const response = await fetch(`${BASE_URL2}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        });

        handleResponse(response);

        if (response.status === 201) {
            const post = await response.json();
            console.log('Post creado:', post);
            return post;
        }

    } catch (error) {
        console.error('Error POST:', error.message);
    }
}

async function createCategory(name, image) {
    try {
        const response = await fetch(`${BASE_URL6}/categories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, image })
        });

        handleResponse(response);

        if (response.status === 201) {
            const category = await response.json();
            console.log('Categoría creada:', category);
            return category;
        }

    } catch (error) {
        console.error('Error categoría:', error.message);
    }
}





const BASE_URL = 'https://jsonplaceholder.typicode.com';


// ERRORES

function handleResponse(response, method) {

    switch (response.status) {


        case 200:
            console.log(`200 OK (${method})`);
            return response;

        case 201:
            console.log(`201 Created (${method})`);
            return response;

        case 204:
            console.log(`204 No Content (${method})`);
            return response;

     
        case 400:
            throw new Error('400 Bad Request');

        case 401:
            throw new Error('401 Unauthorized');

        case 403:
            throw new Error('403 Forbidden');

        case 404:
            throw new Error('404 Not Found');


        case 500:
            throw new Error('500 Internal Server Error');

        case 502:
            throw new Error('502 Bad Gateway');

        case 503:
            throw new Error('503 Service Unavailable');

        default:
            throw new Error(`HTTP Error: ${response.status}`);
    }
}

async function getPosts() {
    try {
        const response = await fetch(`${BASE_URL}/posts`);
        handleResponse(response);

        const data = await response.json();
        console.log('GET POSTS:', data);
        return data;

    } catch (error) {
        console.error(error.message);
    }
}

getPosts();


// POST - CREAR POST

async function createPost(title, body, userId = 1) {
    try {
        const response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, body, userId })
        });

        handleResponse(response, 'POST');

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error.message);
    }
}

createPost('Titulo', 'Contenido', 1);


// PUT - ACTUALIZAR POST
async function updatePost(id, postData) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });

        handleResponse(response, 'PUT');

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.error(error.message);
    }
}

updatePost(1, {title: 'Nuevo título',body: 'Nuevo contenido', userId: 1});

// DELETE - ELIMINAR POST

async function deletePost(id) {
    try {
        const response = await fetch(`${BASE_URL}/posts/${id}`, {
            method: 'DELETE'
        });

        handleResponse(response, 'DELETE');

        console.log(`Post ${id} eliminado`);

    } catch (error) {
        console.error(error.message);
    }
}

deletePost(1);

