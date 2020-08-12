window.onload = () => {
    let icono = document.querySelectorAll('.botoneliminar');
    for (cadauno of icono){
        cadauno.onclick = function () {
            let boton = this.getAttribute('data-botoneliminar');
            fetch('http://localhost:3000/cart/delete', {
                method : 'POST',
                body : JSON.stringify({
                    productoId: boton
                }),
                headers: {'Content-type' : 'application/json'}
            })
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (segunda) {
                return location.reload();
            })
    }
}
}