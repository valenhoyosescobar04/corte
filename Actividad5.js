const productosDeAseo = [
    { nombre: 'Champú', precio: 5.99, stock: 50 },
    { nombre: 'Jabón de manos', precio: 2.49, stock: 100 },
    { nombre: 'Papel higiénico', precio: 3.99, stock: 75 },
    { nombre: 'Cepillo de dientes', precio: 1.99, stock: 60 },
    { nombre: 'Pasta de dientes', precio: 2.49, stock: 55 },
    { nombre: 'Toallas de papel', precio: 4.99, stock: 40 },
    { nombre: 'Desodorante', precio: 3.99, stock: 70 },
    { nombre: 'Acondicionador', precio: 5.99, stock: 45 },
    { nombre: 'Jabón de cuerpo', precio: 2.99, stock: 80 },
    { nombre: 'Loción corporal', precio: 4.49, stock: 65 },
  ];
  
  const carritoDeCompras = {
    productos: [],
  
    agregarProducto: function (nombreProducto) {
      const producto = productosDeAseo.find((p) => p.nombre === nombreProducto);
  
      if (producto && producto.stock > 0) {
        this.productos.push(producto);
        producto.stock--;
        return true;
      } else {
        return false;
      }
    },
  
    calcularTotal: function () {
      return this.productos.reduce((total, producto) => total + producto.precio, 0);
    },
  
    mostrarCarrito: function () {
      console.log('--- Carrito de Compras ---');
      this.productos.forEach((producto) => {
        console.log(`${producto.nombre} - Precio: $${producto.precio.toFixed(2)}`);
      });
      console.log(`Total de la compra: $${this.calcularTotal().toFixed(2)}`);
    },
  };
  
  carritoDeCompras.agregarProducto('Champú');
  carritoDeCompras.agregarProducto('Jabón de manos');
  carritoDeCompras.agregarProducto('Papel higiénico');
  carritoDeCompras.agregarProducto('Cepillo de dientes');
  carritoDeCompras.mostrarCarrito();
  