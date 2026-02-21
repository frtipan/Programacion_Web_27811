const GET_URL = 'https://fakestoreapi.com/users';

const table_body = document.getElementById('userGet');

let dataTable = null;

// ================= ALERTS =================

const showSuccess = (msg) => {
    Swal.fire({
        icon: "success",
        title: "Éxito",
        text: msg,
        timer: 1200,
        showConfirmButton: false
    });
};

const showError = (msg) => {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: msg
    });
};

// ================= GET =================

const getUsers = async () => {
    try {
        const res = await fetch(GET_URL);
        const users = await res.json();
        displayUsers(users);
    } catch {
        showError("No se pudo conectar");
    }
};

// ================= DISPLAY =================

const displayUsers = (users) => {

    table_body.innerHTML = "";

    users.forEach(u => {
        addRow(u.id, u.username, u.email, u.password);
    });

    if (dataTable) {
        dataTable.destroy();
    }

    dataTable = new DataTable("#usersTable", {
        pageLength: 5
    });
};

// ================= ADD ROW =================

function addRow(id, username, email, password) {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${id}</td>

        <td ondblclick="editCell(this, ${id}, 'username')">
            ${username}
        </td>

        <td ondblclick="editCell(this, ${id}, 'email')">
            ${email}
        </td>

        <td ondblclick="editCell(this, ${id}, 'password')">
            ${password}
        </td>

        <td>
            <button class="btn btn-danger btn-sm">Eliminar</button>
        </td>
    `;

    row.querySelector("button")
        .addEventListener("click", () => {
            deleteUser(row, id);
        });

    table_body.appendChild(row);
}

// ================= INLINE EDIT =================

async function editCell(td, id, field) {

    const oldValue = td.innerText;

    td.innerHTML = `<input class="form-control" value="${oldValue}">`;

    const input = td.querySelector("input");
    input.focus();

    input.onblur = async () => {

        const newValue = input.value;
        td.innerText = newValue;

        const row = td.parentElement;

        const user = {
            username: row.children[1].innerText,
            email: row.children[2].innerText,
            password: row.children[3].innerText
        };

        await fetch(`${GET_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        });

        showSuccess("Actualizado");
    };
}

// ================= DELETE =================

async function deleteUser(row, id) {

    const result = await Swal.fire({
        title: "¿Eliminar?",
        showCancelButton: true,
        confirmButtonText: "Sí"
    });

    if (!result.isConfirmed) return;

    await fetch(`${GET_URL}/${id}`, {
        method: "DELETE"
    });

    row.remove();
    showSuccess("Usuario eliminado");
}

// ================= INIT =================

document.addEventListener("DOMContentLoaded", getUsers);
