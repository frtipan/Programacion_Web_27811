//onsole.log('SE CARGO EL ARCHIVO DE ARREGLOS')
//declarar un arreglo

var frutas = ["UVA", "PERA", 'MANZANA','coco', 'sandia'];
//ORDEN QUE QUIERO QUE MUESTRE
//console.log(frutas[0]);
//AGREGA AL FINAL
frutas.push('BANANA');
//AGREGA AL INICIO
frutas.unshift('GUACAMOTE');
//ELIMINAR ULTIMO ELEMENTO
frutas.pop();
//ELIMINAR PRIMER(INICIO) ELEMENTO
frutas.shift();

console.log(frutas)
//saber de que tamaño es el arreglo
let tamanio_arreglo_frutas = frutas.length;

//console.log(tamanio_arreglo_frutas)
var frutas_foreach = frutas.forEach(function(fruta){
    return fruta.toUpperCase() //no devuelve datos
});
// frutas.forEach(function(fruta){
//     console.log(fruta.toUpperCase())
// })
console.log("=============================")

var frutas_map = frutas.map(function(fruta){
    return fruta.toUpperCase()
// frutas.map(function(fruta){
//     console.log(fruta.toUpperCase())
});
console.log(frutas_foreach)
//console.log(frutas_map)