window.onload = () => {
    let iconos = document.querySelectorAll('i');
    let p = document.querySelectorAll('#li');
    let input = document.querySelectorAll('.elinput');

    for (const cadauno of iconos) {
        cadauno.onclick = () => {
            for (const cadados of p) {
                    cadados.classList.toggle('p2');
            };
            for (const cadatres of input) {
                cadatres.classList.toggle('elinput2');
                }
        }
    }
    let formulario = document.querySelector('.form');
    formulario.onsubmit = (ev) => {
        let nombreinput = formulario.querySelector('#nombreinput');
        let errornombre = formulario.querySelector('#errornombre');
        errornombre.innerHTML = '';
        if (nombreinput.value.length < 2) {
            ev.preventDefault();
            errornombre.innerHTML = '<p style="color: red;"> El nombre debe tener al menos 2 caracteres </p>'
        }

        let apellidoinput = formulario.querySelector('#apellidoinput');
        let errorapellido = formulario.querySelector('#errorapellido');
        errorapellido.innerHTML = '';
        if (apellidoinput.value.length < 2) {
            ev.preventDefault();
            errorapellido.innerHTML = '<p style="color: red;"> El apellido debe tener al menos 2 caracteres </p>'
        }

        let emailinput = formulario.querySelector('#emailinput');
        let erroremail = formulario.querySelector('#erroremail');
        erroremail.innerHTML = '';
        let expresionregular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        if (!expresionregular.test(emailinput.value)) {
            ev.preventDefault();
            erroremail.innerHTML = '<p style="color: red;"> Email inválido </p>'
        }
    }
    }
