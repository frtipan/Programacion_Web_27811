var btn_mostrar_tabla = document.getElementById('btn_mostrar_tabla');

btn_mostrar_tabla.addEventListener('click', function (event) {
    var numero1 = parseInt(document.getElementById('numero1').value);

    if (numero1) {
        let pares = "";
        let impares = "";

        for (let i = 1; i <= numero1; i++) {
            if (i % 2 === 0) {
                pares += i + "<br>";
            } else {
                impares += i + "<br>";
            }
        }

        txt_resultado.innerHTML =
            `<strong>Resultado Pares:</strong><br>${pares}<br>
             <strong>Resultado Impares:</strong><br>${impares}`;
    } else {
        txt_resultado.textContent = "Ingrese número por favor";
    }
});

document.getElementById('btn_limpiar').addEventListener('click', function () {
    document.getElementById('numero1').value = '';
    txt_resultado.textContent = "";
});
