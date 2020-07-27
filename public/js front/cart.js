window.onload = () => {
    let icono = document.querySelector('.botoneliminar');
    icono.onclick = () => {
        location.reload();
        return true;
    }
}