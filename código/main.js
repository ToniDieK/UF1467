function generarCSV() {
    const encabezados = ["fecha", "cantidad", "producto", "importe"];     //falta =
    
    const productos = ["Camiseta", "Pantalón", "Gorra", "Sudadera", "Zapatos", "Bufanda", "Chaqueta", "Calcetines"];

    const filas = [encabezados.join(";")]; 

     for (let i = 0; i < 10; i++) {     //i<
      
      const fecha = generarFechaAleatoria();
      const cantidad = Math.floor(Math.random() * 10) + 1;
      const producto = productos[Math.floor(Math.random() * productos.length)];
      const precioUnitario = (Math.random() * 90 + 10).toFixed(2); // entre 10.00 y 100.00
      const importe = (cantidad * precioUnitario).toFixed(2);

      const fila = [fecha, cantidad, `"${producto}"`, importe].join(",");
      filas.push(fila);
    }

    const contenidoCSV = filas.join("\n");
    const blob = new Blob([contenidoCSV], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const enlace = document.createElement("a");
    enlace.setAttribute("href", url);
    enlace.setAttribute("download", "ventas_1000_registros.csv");
    enlace.style.display = "none";
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  }

  function generarFechaAleatoria (){ //parentésis 
    const inicio = new Date(2024, 0, 1).getTime(); 
    const fin = new Date(2035, 3, 1).getTime();   
    const fecha = new Date(inicio + Math.random() * (fin - inicio));
    return fecha.toISOString().split('T')[0];
  }

