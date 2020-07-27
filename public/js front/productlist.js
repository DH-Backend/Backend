/*window.onload = () => {
    let botonagregar = document.querySelectorAll('.agregar');
    for (const cadauno of botonagregar) {
        cadauno.onclick = function () {
            const botoncarrito = this.getAttribute('data-carritoId');

            fetch('http://localhost:3000/api/cart/addProduct', {
                method: 'POST',
                body: JSON.stringify({
                    user_id : res.locals.logeado.id,
                    product_id : botoncarrito
                }),
                headers: {
                    'Content-type' : 'application/json'
                }
            })
            .then(function(datos){
                return datos.json();
            })
            .then(function(masdatos){
                alert('Producto agregado al carrito');
            })
            .catch(function(error) {
                console.log(error);
            });
        }
    }
}*/