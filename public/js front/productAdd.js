window.onload = () => {
    let formulario = document.querySelector('.formulario');
    formulario.onsubmit = (evento) => {
        let inputnombre = formulario.querySelector('#nombre');
        let errornombre = formulario.querySelector('#errornombre');
        errornombre.innerHTML = '';
        if (inputnombre.value.length < 5) {
            evento.preventDefault();
            errornombre.innerHTML = '<p style="color: red;"> El nombre del curso debe tener al menos 5 caracteres </p>'
        }

        let inputlenguaje = formulario.querySelector('#selectlenguaje');
        let errorlenguaje = formulario.querySelector('#errorlenguaje');
        errorlenguaje.innerHTML = '';
        if (inputlenguaje.value == '') {
            evento.preventDefault();
            errorlenguaje.innerHTML = '<p style="color: red;"> Debes elegir algún lenguaje </p>'
        }

        let inputmodalidad = formulario.querySelector('#selectmodalidad');
        let errormodalidad = formulario.querySelector('#errormodalidad');
        errormodalidad.innerHTML = '';
        if (inputmodalidad.value == '') {
            evento.preventDefault();
            errormodalidad.innerHTML = '<p style="color: red;"> Debes elegir alguna modalidad </p>'
        }

        let inputdescripcion = formulario.querySelector('#descripcion');
        let errordescripcion = formulario.querySelector('#errordescripcion');
        errordescripcion.innerHTML = '';
        if (inputdescripcion.value.length < 20) {
            evento.preventDefault();
            errordescripcion.innerHTML = '<p style="color: red;"> La descripción debe tener al menos 20 caracteres </p>'
        }

        let inputcontenido = formulario.querySelector('#contenido');
        let errorcontenido = formulario.querySelector('#errorcontenido');
        errorcontenido.innerHTML = '';
        if (inputcontenido.value.length < 20) {
            evento.preventDefault();
            errorcontenido.innerHTML = '<p style="color: red;"> El contenido debe tener al menos 20 caracteres </p>'
        }

        let inputinicio = formulario.querySelector('#fechainicio');
        let errorinicio = formulario.querySelector('#errorinicio');
        errorinicio.innerHTML = '';
        let input = inputinicio.value;
        let fechahoy = Date.now();
        let fechainput = new Date (input);
        if (fechainput.getTime() <= fechahoy) {
            evento.preventDefault();
            errorinicio.innerHTML = '<p style="color: red;"> Esa fecha de inicio es incorrecta </p>'
        }

        let inputduracion = formulario.querySelector('#duracion');
        let errorduracion = formulario.querySelector('#errorduracion');
        errorduracion.innerHTML = '';
        if (isNaN(inputduracion.value) == true) {
            evento.preventDefault();
            errorduracion.innerHTML = '<p style="color: red;"> La duración debe ser un número </p>'
        }

        let inputvalor = formulario.querySelector('#valor');
        let errorvalor = formulario.querySelector('#errorvalor');
        errorvalor.innerHTML = '';
        if (parseInt(inputvalor.value)== NaN) {
            evento.preventDefault();
            errorvalor.innerHTML = '<p style="color: red;"> El valor debe ser un número </p>'
        }
    }
}