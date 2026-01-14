var btn_agregar = document.getElementById('btn_agregar');
var arreglos_productos = [];

btn_agregar.addEventListener('click', function(event){
    var nombre_producto = document.getElementById('txt_nombre_producto');
    var lista_productos = document.getElementById('lista_productos');
    var lista_productos = document.getElementById('lista_productos2');

    if(nombre_producto.value!=''){

        var elementoLI = document.createElement('li');
        elementoLI.classList.add( 'list-group-item');
        elementoLI.textContent = nombre_producto.value;
        lista_productos.appendChild(elementoLI);
        arreglos_productos.push(nombre_producto.value);
        nombre_producto.value = '';
    }else{
        console.log('POR FAVOR INGRESE UN PRODUCTO VALIDO.!');
    }

    var producto_mayuscula = arreglos_productos.map(function(producto){
        return producto.toUpperCase()
    })
    console.log(producto_mayuscula)
    // console.log(arreglos_productos)

    if(nombre_producto.value!=''){

        var elementoLI = document.createElement('li');
        elementoLI.classList.add( 'list-group-item2');
        elementoLI.textContent = nombre_producto.value;
        lista_productos.appendChild(elementoLI);
        arreglos_productos.push(nombre_producto.value);
        nombre_producto.value = '';
    }else{
        console.log('POR FAVOR INGRESE UN PRODUCTO VALIDO.!');
    }

    var producto_mayuscula = arreglos_productos.map(function(producto){
        return producto.toUpperCase()
    })
    console.log(producto_mayuscula)

})