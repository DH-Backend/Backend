window.addEventListener ("load", function () {
    let botonfavoritos = document.querySelector('.botonfavoritos');
    let infofavoritos = document.querySelectorAll('.favoritos');
    botonfavoritos.addEventListener("click", function (ev) {
        for (cadauno of infofavoritos) {
            ev.preventDefault()
            cadauno.classList.toggle('favoritos');
            cadauno.classList.toggle('favoritosonclick');
        }
    }
)
    let botoneliminar = document.querySelectorAll('.nose2');
    for (uno of botoneliminar) {
        uno.onclick = function () {
            let elboton = this.getAttribute('data-eliminarfav');
            fetch('http://localhost:3000/profile/delete', {
                method: 'POST',
                body: JSON.stringify({
                    boton:elboton
                }),
                headers: {'Content-type' : 'application/json'}
            })
            .then(function(respuesta){
                return json.respuesta();
            })
            .then(function(otrarespuesta) {
                return location.reload();
            })
        }
        }
})