// DECLARAMOS EN VARIABLE EL BOTON Y HACEMOS LA LLAMADA
var btn_multiplicar = document.getElementById("btn_multiplicar");
// ACCEDEMOS AL EVENTO CLICK
btn_multiplicar.addEventListener("click", function (event) {

    // CAPTURAMOS EL VALOR DE LAS ENTRADAS

    let n1 = document.getElementById("txt_numero5").value;
    let n2 = document.getElementById("txt_numero6").value;

    let txt_resultado_multiplicacion = document.getElementById("txt_resultado_multiplicacion");

    // innerHTML para mostrar/ actualizar el resultado
    txt_resultado_multiplicacion.innerHTML = parseFloat(n1) * parseFloat(n2);
});