# Exámen UF1467
Este documento describe los pasos seguidos en el exámen revisando **erróres de código** y trabajando con datos de una **Hoja de Cálculo** haciendo **formulas** e **incrustando** o **vinculando** gráficos con la tabla.

# Guía de Usuario

1. [Ejercicio1](#Ejercicio1)
2. [Ejercicio2](#Ejercicio2)
3. [Ejercicio3](#Ejercicio3)

## Ejercicio1
Buscar errores en el código, aquí un ejemplo de código erronéo 
```HTML
<DOCTYPE html>  
<html lang="es">
<head>
  <meta charset="UTF-8">
 
  <title>Generador de CSV (1000 registros)</title>
  <link rel="stylesheet" href="styles.css">
<body>
  <h1>Generar CSV con 1000 registros</h1>
  <h1>Pulsar sobre botón para generar fichero</h1>
   <button onclic="generarCSV">Descargar CSV</button> 
   </body>

</html>
 <script src="./main.js"></script>
```

```HTML
<!DOCTYPE html>   <!--signo -->
<html lang="es">
<head> <!-- falta cerrar head -->
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>   <!-- faltan etiquetas name y content -->
  <title>Generador de CSV (1000 registros)</title>
  <link rel="stylesheet" href="styles.css">
</head>  
<body>
  <h1>Generar CSV con 1000 registros</h1>
  <h2>Pulsar sobre botón para generar fichero</h2>  <!-- es un segundo título  -->
   <button onclick="generarCSV">Descargar CSV</button>   <!--click mal escrito -->

   
   <script src="./main.js"></script>  <!-- script fuera del código -->
   </body>

  
</html>

```



A continuación enlace al documento word:

[Documento word](https://github.com/ToniDieK/UF1467/blob/main/documentaci%C3%B3n/Antonio%20M%C3%A9ndez.docx)



## Ejercicio2

Creación de hoja de cálculo en excel con **gráficos** y **formulas**

[Documento excel](https://github.com/ToniDieK/UF1467/blob/main/documentaci%C3%B3n/Antonio%20M%C3%A9ndez.xlsx)




## Ejercicio3

Utilización **procesador de texto** vinculado con hoja de calculo y uso de **gráficos**, exportación en **pdf** y subida de proyecto a **GITHUB**

Enlace a proyecto [GITHUB](https://github.com/ToniDieK/UF1467.git)
Enlace a documento en [PDF](https://github.com/ToniDieK/UF1467/blob/main/documentaci%C3%B3n/Antonio%20M%C3%A9ndez.pdf)


