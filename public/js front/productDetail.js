window.onload = () => {
    let botonagregar = document.querySelector('.botonagregar');
        botonagregar.onclick = function () {
            const boton = botonagregar.getAttribute('data-botonagregar');
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
                }
            })
        }
}