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
En primer lugar, la clase note es muy sencilla. Se encarga de crear las notas con un título, cuerpo y color con el constructor de la clase y luego consta de varios métodos que se encargan de obtener las propiedades privadas de dicho objeto de la clase. También tiene un método print para imprimir los datos de la nota en conjunto.

![Error al cargar la imagen de la clase nota](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/master/images/note.png)

En cuanto a la clase collection, consta de varios métodos para modificar a las diferentes notas. Esta clase crea un objeto a partir de un nombre de usuario, el cual puede añadir una nota a su colleción, borrarla, modificarla, leer los títulos de todas sus notas o simplemente leer una en concreto. 

En primer lugar, el método findNote simplemente busca si existe en la colección una nota con el título pasado por parámetro. En caso de que lo encuentre, devuelve true ya que retorna un valor booleano. Le sigue la función addNote, la cual se encarga de añadir una nueva nota a la colección. Primero, se asegura de que no existe una nota con el mismo título y luego la añade con un formato .json. Destacar que, los mensajes de error se visualizan en color rojo, y los de control en color verde. 

El método modifyNote recibe por parámetro el título, el nuevo cuerpo de la nota y un color. Primero, se asegura de que exista una nota con dicho título para luego proceder a modificar el cuerpo de la misma. 

En cuanto al método remove, elimina la nota con el título especificado por parámetro mediante el uso del comando rm. También se listan y leen las notas con otro dos métodos muy similares, los cuales imprimer por pantalla haciendo uso de los métodos de la clase note la información deseada. 

![Error al cargar la imagen](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/master/images/collection1.png)

![Error al cargar la imagen](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/master/images/collection2.png)

Por último, el index se encarga de realizar la interacción por línea de comando con el usuario. Haciendo uso de los paquetes que detalla la práctica __Yargs__ y __Chalk__ se permite pasar varios argumentos por línea de comando. Todos llevan el mismo procedimiento. Se detalla que es un comando con su nombre correspondiente de uso, una pequeña descripción y los diferentes parámetros que conlleva la acción. Luego, a la función __handler__ se le pasan los argumentos que va a recibir por línea de comando y se comprueba que tengan el mismo tipo (string). Por último, dependiendo del comando, se procede a hacer uso de los métodos de la clase collection para realizar las acciones listar los títulos de las notas, borrar una de ellas, etc. 

![Error al cargar la imagen](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/master/images/index1.png)

![Error al cargar la imagen](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/master/images/index2.png)


## 4. Ejemplos de uso de la aplicación
![Error al cargar la imagen del ejemplo](https://raw.githubusercontent.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/master/images/ejemplos.png)

En el caso de listar las diferentes notas y leerlas no entiendo qué es lo que sucede ya que, en ocasiones muestra y lista todas las notas de la carpeta del respectivo usuario, sin embargo, hay veces que no lo hace y muestra un "undefined". Detallar que sigo el mismo procedimiento que en los demás comandos. 

## 5. Conclusiones y dificultades
A modo de conclusión, me ha resultado muy interesante la práctica para poner en práctica la interacción por línea de comandos. Tras leer la documentación aportada en el guión de la práctica sobre los diferentes paquetes necesarios para su realización, no se me ha presentado ninguna dificultad. Por último, he generado la documentación en HTML mediante TypeDoc y he realizado las respectivas pruebas unitarias. Además, he includo el flujo de trabajo de GitHub Actions para llevar a cabo las pruebas en diferentes entornos con diferentes versiones de Node.js, enviar los datos de cubrimiento a Coveralls, así como realizar un análisis de la calidad y seguridad del código fuente a través de Sonar Cloud. Por último, tras seguir los videos del profesorado de la asignatura, las GitHub Actions no se sincronizan bien con coveralls.

[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/badge.svg?branch=master)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe?branch=master)

[![Coveralls](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/actions/workflows/coveralls.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2021/ull-esit-inf-dsi-20-21-prct08-filesystem-notes-app-lauracahe/actions/workflows/coveralls.yml)

## 6. Referencias
1. [Guión práctica 8](https://campusingenieriaytecnologia.ull.es/mod/assign/view.php?id=290092)
2. [Yargs](https://www.npmjs.com/package/yargs)
3. [Chalk](https://www.npmjs.com/package/chalk)
4. [API de Node.js](https://nodejs.org/dist/latest-v15.x/docs/api/fs.html#fs_synchronous_api)