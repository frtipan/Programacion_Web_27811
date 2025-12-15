// DECLARAMOS EN VARIABLE EL BOTON Y HACEMOS LA LLAMADA
var btn_dividir = document.getElementById("btn_dividir");
// ACCEDEMOS AL EVENTO CLICK
btn_dividir.addEventListener("click", function (event) {

    // CAPTURAMOS EL VALOR DE LAS ENTRADAS

    let n1 = document.getElementById("txt_numero7").value;
    let n2 = document.getElementById("txt_numero8").value;

    let txt_resultado_division = document.getElementById("txt_resultado_division");

    // innerHTML para mostrar/ actualizar el resultado
    txt_resultado_division.innerHTML = parseFloat(n1) / parseFloat(n2);
});