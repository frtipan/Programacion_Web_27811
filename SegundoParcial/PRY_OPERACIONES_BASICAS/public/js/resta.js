var btn_restar = document.getElementById("btn_restar");
// ACCEDEMOS AL EVENTO CLICK
btn_restar.addEventListener("click", function (event) {

    // CAPTURAMOS EL VALOR DE LAS ENTRADAS

    let n1 = document.getElementById("txt_numero3").value;
    let n2 = document.getElementById("txt_numero4").value;

    let txt_resultado_resta = document.getElementById("txt_resultado_resta");

    // innerHTML para mostrar/ actualizar el resultado
    txt_resultado_resta.innerHTML = parseFloat(n1) - parseFloat(n2);
});