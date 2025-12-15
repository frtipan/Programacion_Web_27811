var radio_rojo = document.getElementById('radio_rojo');
var radio_amarrillo = document.getElementById('radio_amarrillo');
var radio_verde = document.getElementById('radio_verde');
var txt_resultado = document.getElementById('txt_resultado');


radio_rojo.addEventListener('click', function(event){

    txt_resultado.textContent = 'DETENGASE....!';

});

radio_amarrillo.addEventListener('click', function(event){

    txt_resultado.textContent = 'PRECAUCIÓN....!';

});

radio_verde.addEventListener('click', function(event){

    txt_resultado.textContent = 'AVANCE....!';

});