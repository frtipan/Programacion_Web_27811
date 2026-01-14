// declarar un objeto
 var persona = {
    nombres: "FERNANDO RENE", 
    apellidos: "TIPAN MUÑOZ",
    edad: 25,
    es_alumno: true,
    estatura: 1.66
 };
 //console.log(persona["nombres"])
 //  console.log(persona.nombres)
//  console.log(persona.apellidos)
//  console.log(persona.edad)
//  console.log(persona.es_profesor)
//  console.log(persona.estatura)

 var datos_persona = document.getElementById("datos_persona");
 datos_persona.innerHTML = `
 La persona se llama ${persona.nombres} y su apellido ${persona.apellidos} y su edad es ${persona.edad} 
 y menciona que ${persona.es_alumno? 'si' : 'no'} es alumno, 
 y su estatura es ${persona.estatura}`;

 var txt_nombres = document.getElementById('txt_nombres');
 txt_nombres.value = persona.nombres;

var txt_apellidos = document.getElementById('txt_apellidos');
 txt_apellidos.value = persona.apellidos;

 var txt_edad = document.getElementById('txt_edad');
 txt_edad.value = persona.edad;

 var sel_es_estudiante = document.getElementById('sel_es_estudiante');
 
 if(persona.es_alumno){
    sel_es_estudiante.value = 'SI';
 }else{
    sel_es_estudiante.value = 'NO';
 }

var txt_estatura = document.getElementById('txt_estatura');
txt_estatura.value = persona.estatura;

var check_mayor_edad = document.getElementById('check_mayor_edad');
if (persona.edad >= 18) {
    check_mayor_edad.checked = true;
} else {
    check_mayor_edad.checked = false;
}

// var btn_actualizar = document.getElementById('btn_actualizar');
// btn_actualizar.addEventListener('click', function(event){

// });

document.getElementById("btn_actualizar").addEventListener("click", function () {

    persona.nombres = txt_nombres.value;
    persona.apellidos = txt_apellidos.value;
    persona.edad = parseInt(txt_edad.value);
    persona.es_alumno = sel_es_estudiante.value === 'SI';
    persona.estatura = parseFloat(txt_estatura.value);
    check_mayor_edad.checked = persona.edad >= 18;
    datos_persona.innerHTML = `
    La persona se llama ${persona.nombres} y su apellido ${persona.apellidos}
    y su edad es ${persona.edad},
    menciona que ${persona.es_alumno ? 'sí' : 'no'} es alumno,
    y su estatura es ${persona.estatura}
    `;
});



