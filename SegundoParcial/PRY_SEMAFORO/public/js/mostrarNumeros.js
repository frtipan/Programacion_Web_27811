var btn_mostrar_numeros = document.getElementById('btn_mostrar_numeros');
var numero_inicio = document.getElementById('numero_inicio');
var numero_fin = document.getElementById('numero_fin');
var txt_resultado = document.getElementById('txt_resultado');

btn_mostrar_numeros.addEventListener('click', function (event) {
    let numeros = "";
    let inicio = parseInt(numero_inicio.value);
    let fin = parseInt(numero_fin.value);
    for (let i = inicio; i <= fin; i++) {
        
        numeros += `${i} <br>`;
    }
    txt_resultado.innerHTML = numeros;
});