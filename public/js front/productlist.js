window.onload = () => {
    let botonagregar = document.querySelectorAll('.botonagregar');
    for (const cadauno of botonagregar) {
        cadauno.onclick = function () { 
            const boton = this.getAttribute('data-AgregarId');
            fetch('http://localhost:3000/cart/add', {
                method : 'POST',
                body : JSON.stringify({
                    id_curso : boton
                }),
                headers : {'Content-type' : 'application/json'}
            })
            .then(function(respuesta) {
                return respuesta.json();
            })
            .then(function(otra){
                if (!confirm('¿Querés seguir comprando?')) {
                    location.href = 'http://localhost:3000/products/cart';
                } else {
                    return location.reload();
                }
            })
        }
    }


    let botoneliminar = document.querySelectorAll('.eliminar');
    for (botones of botoneliminar) {
        botones.onclick = function (ev) {
            
            if(!confirm('Seguro que queres eliminarlo?')) {
                ev.preventDefault();
            }
        }
    }

    let botonfavoritos = document.querySelectorAll('.favoritoss');
    for (datos of botonfavoritos) {
        datos.onclick = function () {
            const fav = this.getAttribute('data-favouriteId');
            fetch('http://localhost:3000/profile/favourites', {
                method: 'POST', 
                body: JSON.stringify({
                    favorito : fav
                }),
                headers: {'Content-type' : 'application/json'}
            })
            .then(function (valor) {
                return valor.json();
            })
            .then(function(otrovalor) {
                alert('Agregado a favoritos');
                return location.reload();
            })
        }
    }
}