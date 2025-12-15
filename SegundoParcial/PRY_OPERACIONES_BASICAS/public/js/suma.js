// DECLARAMOS EN VARIABLE EL BOTON Y HACEMOS LA LLAMADA
var btn_sumar = document.getElementById("btn_sumar");
//ACCEDEMOS AL EVENTO CLICK
btn_sumar.addEventListener("click", function (event) {

    //CAPTURAMOS EL VALOR DE LAS ENTRADAS
    let n1 = document.getElementById("txt_numero1").value;
    let n2 = document.getElementById("txt_numero2").value;

    let txt_resultado_suma = document.getElementById("txt_resultado_suma");
    //innerHtml para mostrar/ actualizar el resultado
    txt_resultado_suma.innerHTML = parseFloat(n1) + parseFloat(n2);

});
