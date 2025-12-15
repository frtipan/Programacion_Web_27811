var btn_mostrar_tabla = document.getElementById('btn_mostrar_tabla');

btn_mostrar_tabla.addEventListener('click', function (event) {
    var numero1 = parseInt(document.getElementById('numero1').value);
    if (numero1) {
        let resp = "";
        var resultado = "";
        for (let i = 1; i <= 12; i++) {
            resp = `${numero1} x ${i} = ${numero1 * i} <br>`;
            console.log(resp);
            resultado += resp;
        }
        txt_resultado.innerHTML = resultado;
    }else{
        
        txt_resultado.textContent = "Ingrese numero por favor";
    }
})
document.getElementById('btn_limpiar').addEventListener('click',function(){
    document.getElementById('numero1').value='';
    txt_resultado.textContent = "";
})