window.onload = () => {
    let formulario = document.querySelector('.form');
    formulario.onsubmit = (evento) => {
        let contrainput = formulario.querySelector('.contrainput');
        let errorcontra = formulario.querySelector('#modificarjs2');
        errorcontra.innerHTML = '';
        if(contrainput.value.length < 8 || contrainput.value.length > 15) {
            evento.preventDefault();
            errorcontra.innerHTML = '<p><i class="fas fa-exclamation"></i> La contraseña debe tener entre 8 y 15 caracteres </p>'
        }

        let ccontrainput = formulario.querySelector('.ccontrainput');
        let errorccontra = formulario.querySelector('#modificarjs');
        errorccontra.innerHTML = '';
        if(ccontrainput.value != contrainput.value) {
            evento.preventDefault();
            errorccontra.innerHTML = '<p><i class="fas fa-exclamation"></i> Las contraseñas no coinciden </p>'
        }
    }
}