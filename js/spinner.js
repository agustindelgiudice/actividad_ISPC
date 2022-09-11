window.onload = function () {
    let contenedor = document.getElementById('contenedor_carga');

    contenedor.style.visibility = 'hidden';
    contenedor.style.opacity = '0';

    setTimeout((() => {
        contenedor.remove()

    }, 1000))
}


let registro = document.getElementById('#registro')
    

registro.addEventListener('click', mostrarImagen)
function mostrarImagen () {

    registro.style.background = url('../assets/registro.jpeg')


}

mostrarImagen();