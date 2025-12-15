var txt_resultado = document.getElementById('txt_resultado');
var radios = document.querySelectorAll('input[name="color"]');
var seleccionadoInicial = document.querySelector('input[name="color"]:checked');

if (seleccionadoInicial) {
    let color = seleccionadoInicial.value;
    if (color == 'rojo') {
        txt_resultado.textContent = 'Deténgase...!';
    } else if (color == 'amarillo') {
        txt_resultado.textContent = 'Cuidado...!';
    } else if (color == 'verde') {
        txt_resultado.textContent = 'Avance...!';
    }
} else {
    txt_resultado.textContent = "Por favor seleccione una opción...!";
}

radios.forEach(radio => {
    radio.addEventListener('click', () => {

        var seleccionado = document.querySelector('input[name="color"]:checked');
        if (!seleccionado) {
            txt_resultado.textContent = "Por favor seleccione una opción...!";
        } else {
            let color = seleccionado.value;
            if (color == 'rojo') {
                txt_resultado.textContent = 'Deténgase...!';
            } else if (color == 'amarillo') {
                txt_resultado.textContent = 'Cuidado...!';
            } else if (color == 'verde') {
                txt_resultado.textContent = 'Avance...!';
            }
        }
    });
});
