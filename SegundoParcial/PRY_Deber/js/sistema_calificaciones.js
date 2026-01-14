let notas = [8, 4, 10, 6, 3, 9, 5, 7, 2];
let aprobados = 0;
let supletorios = 0;
let reprobados = 0;
let suma = 0;

notas.forEach(nota => {
  suma += nota;
  if (nota >= 7 && nota <= 10) {
    aprobados++;
  } else if (nota >= 5 && nota <= 6) {
    supletorios++;
  } else {
    reprobados++;
  }
});

let promedio = suma / notas.length;
let estadoCalificacion = promedio >= 7 ? "Aprobado" : "En riesgo";
document.getElementById("aprobados").textContent = `Total de Aprobados: ${aprobados}`;
document.getElementById("supletorios").textContent = `Total de Supletorio: ${supletorios}`;
document.getElementById("reprobados").textContent = `Total de Reprobados: ${reprobados}`;
document.getElementById("promedio").textContent = `Promedio del curso: ${promedio.toFixed(2)}`;
document.getElementById("estado").textContent = `Estado del curso: ${estadoCalificacion}`;

let columna1 = document.getElementById("columna1");
let columna2 = document.getElementById("columna2");
notas.forEach((nota, index) => {
  let colum1 = document.createElement("li");
  colum1.className = "list-group-item";
  colum1.textContent = `Nota: ${nota}`;
  columna1.appendChild(colum1);
  let colum2 = document.createElement("li");
  colum2.className = "list-group-item";
  if (nota >= 7) {
    colum2.textContent = "Aprobado";
    colum2.classList.add("text-success");
  } else if (nota >= 5) {
    colum2.textContent = "Supletorio";
    colum2.classList.add("text-warning");
  } else {
    colum2.textContent = "Reprobado";
    colum2.classList.add("text-danger");
  }
  columna2.appendChild(colum2);
});