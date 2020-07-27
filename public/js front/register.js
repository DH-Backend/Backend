window.onload = () => {
    let formulario = document.querySelector('#elformulario');
    formulario.onsubmit = (ev) => {
        let inputnombre = formulario.querySelector('#inputnombre');
        let diverrorn = document.querySelector('#uno');
        diverrorn.innerHTML = '';
        if (inputnombre.value.length < 2) {
            ev.preventDefault();
            diverrorn.innerHTML = '<div><i style="color: red;" class="fas fa-exclamation"></i> El nombre debe tener al menos dos letras </div>'
        }

        let inputapellido = formulario.querySelector('#inputapellido');
        let diverrora = document.querySelector('#dos');
        diverrora.innerHTML = '';
        if (inputapellido.value.length < 2) {
            ev.preventDefault();
            diverrora.innerHTML = '<div><i style="color: red;" class="fas fa-exclamation"></i> El apellido debe tener al menos dos letras </div>'
        }

        let inputemail = formulario.querySelector('.inputmail');
        let diverrore = document.querySelector('#tres');
        diverrore.innerHTML = '';
        let expresionregular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (expresionregular.test(inputemail.value) == false) {
            ev.preventDefault();
            diverrore.innerHTML = '<div><i style="color: red;" class="fas fa-exclamation"></i> El email es incorrecto </div>'
        }

        let inputcontra = formulario.querySelector('#inputcontra');
        let diverrorc = formulario.querySelector('#errorcontra');
        diverrorc.innerHTML = '';
        if (inputcontra.value.length < 8 || inputcontra.value.length > 15) {
            ev.preventDefault();
            diverrorc.innerHTML = '<div><i style="color: red;" class="fas fa-exclamation"></i> La contraseña debe tener entre 8 y 15 caracteres </div>'
        }

        let inputccontra = formulario.querySelector('#inputccontra');
        let diverrorcc = formulario.querySelector('#errorccontra');
        diverrorcc.innerHTML = '';
        if (inputcontra.value != inputccontra.value) {
            ev.preventDefault();
            diverrorcc.innerHTML = '<div><i style="color: red;" class="fas fa-exclamation"></i> Las contraseñas no coinciden </div>'
        }
    }
}