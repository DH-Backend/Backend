window.onload = () => {
    let botonagregar = document.querySelector('.botonagregar');

    for (cadauno of botonagregar) {
        cadauno.onclick = () => {
            const boton = this.getAttribute('data-AgregarId');
        }
    }

}