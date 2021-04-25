# Práctica 8: Aplicación de procesamiento de notas de textoTarea

## 1. Introducción
A modo de introducción, se detallará un informe de la octava práctica de la asignatura Desarrollo de Sistemas Informáticos del grado de Ingeniería Informática sobre una aplicación de procesamiento de notas de texto. Estas se almacenarán en ficheros JSON del sistema de ficheros de la máquina que ejecute la aplicación.

Cabe destacar que solo se podrá interactuar con la aplicación desde la línea de comandos. Para ello, se ha instalado el paquete __Yargs__ que ayuda a crear herramientas de línea de comandos interactivas, analizando argumentos y generando una elegante interfaz de usuario. Además, el paquete __chalk__ que permite darle un estilo a las cadenas que se muestran en la terminal. Y también, me he familiarizado con el API síncrona proporcionada por Node.js para trabajar con el sistema de ficheros. 

## 2. Requisitos de la aplicación
- Interacción de múltiples usuarios pero no simultáneamente. 
- Una nota está formada por: Un título, un cuerpo y un color (rojo, azul, verde o amarillo).
- Cada usuario tendrá su propia lista de notas y podrá: añadir una nota nueva, borrar o modificar una de la colección, listar todos los títulos de las notas de la colección, leer las diferentes notas...
- Los mensajes informativos se muestran en color verde y los errores en rojo. 


## 3. Desarrollo del proyecto

## 4. Ejemplos de uso de la aplicación
![Error al cargar la imagen del ejemplo](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/master/images/ejemplos.png)

En el caso de listar las diferentes notas y leerlas no entiendo qué es lo que sucede ya que, en ocasiones muestra y lista todas las notas de la carpeta del respectivo usuario, sin embargo, hay veces que no lo hace y muestra un "undefined". Detallar que sigo el mismo procedimiento que en los demás comandos. 

## 5. Conclusiones y dificultades
A modo de conclusión, me ha resultado muy interesante la práctica para poner en práctica la interacción por línea de comandos. Tras leer la documentación aportada en el guión de la práctica sobre los diferentes paquetes necesarios para su realización, no se me ha presentado ninguna dificultad. Por último, he generado la documentación en HTML mediante TypeDoc y he realizado las respectivas pruebas unitarias. Además, he includo el flujo de trabajo de GitHub Actions para llevar a cabo las pruebas en diferentes entornos con diferentes versiones de Node.js, enviar los datos de cubrimiento a Coveralls, así como realizar un análisis de la calidad y seguridad del código fuente a través de Sonar Cloud.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe?branch=master)

## 6. Referencias
1. [Guión práctica 8](https://campusingenieriaytecnologia.ull.es/mod/assign/view.php?id=290092)
2. [Yargs](https://www.npmjs.com/package/yargs)
3. [Chalk](https://www.npmjs.com/package/chalk)
4. [API de Node.js](https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_synchronous_api)