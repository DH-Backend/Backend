window.onload = () => {

    let formulario = document.querySelector('.form');
    formulario.onsubmit = (ev) => {
        let nombreinput = formulario.querySelector('#nombreinput');
        let errornombre = formulario.querySelector('#errornombre');
        errornombre.innerHTML = '';
        if (nombreinput.value.length < 2) {
            ev.preventDefault();
            errornombre.innerHTML = '<p class = "perror"> El nombre debe tener al menos 2 caracteres </p>'
        }

        let apellidoinput = formulario.querySelector('#apellidoinput');
        let errorapellido = formulario.querySelector('#errorapellido');
        errorapellido.innerHTML = '';
        if (apellidoinput.value.length < 2) {
            ev.preventDefault();
            errorapellido.innerHTML = '<p class = "perror"> El apellido debe tener al menos 2 caracteres </p>'
        }

        let emailinput = formulario.querySelector('#emailinput');
        let erroremail = formulario.querySelector('#erroremail');
        erroremail.innerHTML = '';
        let expresionregular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!expresionregular.test(emailinput.value)) {
            ev.preventDefault();
            erroremail.innerHTML = '<p class="emailerror"> Email inválido </p>'
        }
    }
    }
