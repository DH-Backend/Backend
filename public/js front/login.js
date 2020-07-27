window.onload = () => {
    let formulario = document.querySelector('#elformulario');
    formulario.onsubmit = (evento) => {
        let inputmail = formulario.querySelector('.inputmail');
        let expresionregular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!expresionregular.test(inputmail.value)) {
            evento.preventDefault();
            let diverror = document.querySelector('div.errors1');
            diverror.innerHTML = '<div class="invalid"><i style="color: red;" class="fas fa-exclamation"></i> Email incorrecto </div>';
        }

        let contraseña = formulario.querySelector('#inputcontra');
        if (contraseña.value.length < 8 || contraseña.value.length > 15) {
            evento.preventDefault();
            let diverrorc = document.querySelector('#errorscontra');
            diverrorc.innerHTML = '<div class="invalid"><i style="color: red;" class="fas fa-exclamation"></i> Contraseña incorrecta </div>';
        }
    }
}