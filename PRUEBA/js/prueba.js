const API = "https://fakestoreapi.com/users";

const form = document.getElementById("formUser");
const tbody = document.getElementById("tbody");

const userId = document.getElementById("userId");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const username = document.getElementById("username");
const password = document.getElementById("password");

let usuarios = [];

// ================== OBTENER ==================
const obtenerUsuarios = async () => {
  const res = await fetch(API);
  const data = await res.json();

  // normalizamos datos de la API
  usuarios = data.map(u => ({
    id: u.id,
    username: u.username,
    name: {
      firstname: u.name.firstname,
      lastname: u.name.lastname
    }
  }));

  pintarUsuarios();
};

// ================== PINTAR ==================
const pintarUsuarios = () => {
  tbody.innerHTML = "";

  usuarios.forEach(user => {
    tbody.innerHTML += `
      <tr>
        <td>${user.id}</td>
        <td>${user.name.firstname}</td>
        <td>${user.name.lastname}</td>
        <td>${user.username}</td>
        <td>
          <button class="edit" onclick="editarUsuario(${user.id})">Editar</button>
          <button class="delete" onclick="eliminarUsuario(${user.id})">Eliminar</button>
        </td>
      </tr>
    `;
  });
};

// ================== GUARDAR / EDITAR ==================
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const id = userId.value;

  const usuario = {
    id: id
      ? Number(id)
      : (usuarios.length ? Math.max(...usuarios.map(u => u.id)) + 1 : 1),
    username: username.value,
    name: {
      firstname: firstname.value,
      lastname: lastname.value
    }
  };

  if (id) {
    // EDITAR
    usuarios = usuarios.map(u => u.id === Number(id) ? usuario : u);
    Swal.fire("Actualizado", "Usuario editado correctamente", "success");
  } else {
    // AGREGAR
    usuarios.push(usuario);
    Swal.fire("Guardado", "Usuario agregado correctamente", "success");
  }

  form.reset();
  userId.value = "";
  pintarUsuarios();
});

// ================== EDITAR ==================
const editarUsuario = (id) => {
  const user = usuarios.find(u => u.id === id);

  userId.value = user.id;
  firstname.value = user.name.firstname;
  lastname.value = user.name.lastname;
  username.value = user.username;
};

// ================== ELIMINAR ==================
const eliminarUsuario = (id) => {
  Swal.fire({
    title: "¿Eliminar usuario?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar"
  }).then(result => {
    if (result.isConfirmed) {
      usuarios = usuarios.filter(u => u.id !== id);
      pintarUsuarios();
      Swal.fire("Eliminado", "Usuario eliminado correctamente", "success");
    }
  });
};

obtenerUsuarios();
