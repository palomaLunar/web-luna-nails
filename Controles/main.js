// Informacion de productos
const productos = [
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' },
    { nombre: 'Producto 2', precio: 15, descripcion: 'Descripción del producto 2', imagen: 'http://127.0.0.1:5500/unas-valladolid/img-acrilicas/Acr%C3%ADlicas.jpg' }, // ... más productos
];

// obtenemos elemento del html la carta de descripcion del los productos
const contenedorProductos = document.getElementById('productos-card');

// Iterar sobre el array y crear una tarjeta por cada producto
productos.forEach(producto => {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('card');

    // Crear elementos HTML para cada propiedad del producto
    const imagen = document.createElement('img');
    imagen.src = `${producto.imagen}`; // Agregar la URL de la imagen
   
    const titulo = document.createElement('h3');
    titulo.textContent = producto.nombre;

    const precio = document.createElement('h5');
    precio.textContent = `Precio: $${producto.precio}`;

    const descripcion = document.createElement('p');
    descripcion.textContent = producto.descripcion; 


    // Agregar los elementos a la tarjeta
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(descripcion);

    // Agregar la tarjeta al contenedor
    contenedorProductos.appendChild(tarjeta);
});
const tarjetaTratamientos = `
    <div class="card">
    <img src="${producto.imagen}" alt="${producto.nombre}">
        <h2>${producto.nombre}</h2>
        <p>Precio: $${producto.precio}</p>
        <p>${producto.descripcion}</p>
    </div>
`;
tarjeta.innerHTML = tarjetaTratamientos;
