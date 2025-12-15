var btn_convertir = document.getElementById("btn_convertir");


btn_convertir.addEventListener("click", function () {

   
    let n1 = parseFloat(document.getElementById("temperatura").value);

    let txt_resultado_conversion_farenheit = document.getElementById("txt_resultado_conversion_farenheit");
    let txt_resultado_conversion = document.getElementById("txt_resultado_conversion");
    

   
    let resultadoF = n1 * 9 / 5 + 32;      
    let resultadoC = (resultadoF - 32) * 5 / 9; 

 
    txt_resultado_conversion_farenheit.innerHTML = `Equivale a Farenheit: ${resultadoF.toFixed(2)} °F`;
    txt_resultado_conversion.innerHTML = `Celsius: ${resultadoC.toFixed(2)} °C`;

});
