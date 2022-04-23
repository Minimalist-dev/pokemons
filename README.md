# Pokemons

![Esta es una imagen](/../master/i_iconos/logo.png)

## Ficheros
Las carpetas que inician con la letra "i" se refieren a la parte de la vista (interfaz) de la SPA. la carpeta "i_css" contiene los archivos de estilo (.css), mientras que la carpeta "i_iconos" contiene los iconos utilizados para visualizar el logo, decoral y adaptar el diseño a la tematica de la SPA.

En las carpetas que comienzan con la letra "l" se refieren a la parte de controladores, o sea de la dinamica de la vista o dinamica de funcionalidad de la SPA. Dentro de la carpeta aparesen dos archivos de los cuales solo se utilizan uno a la vez, los cuales se pueden usar según la preferencia del interezado.

En cuanto a la carpeta que comienza con la letra "s" se refieren a la parte del modelo, la cual contiene un archivo con un objeto que se puede retornar y reutilizar para controlar los resultados indeceados de la (rest-api).

- i_css/
  - root.css
  - index.css
  - maquetado.css
- i_iconos/
  - logo.png
  - lupa.png
  - pokeball.png
- l/
  - l/
    - index.js
    - index_bem.js
- s/
  vacio.json

index.html

## Clases y objetos


- **class Pokemon**
  - **constructor() {}**
    - El CONSTRUCTOR tiene la parte que se inicializa al ejecutar la aplicación, esto evita errores en los argoritmos de (estilo y logica), y asigna valores predeterminados. 
  - **static lanzar() {}**
    - El metodo LANZAR es reutilizado para abrir y cerrar cualquier modal de la SPA, con solo unas pocas lineas y aprueba de errores.
  - **static colocar() {}**
    - El metodo COLOCAR se utiliza para solicitar los Pokemons, y retutilizado para autocargar mas según el comportamiento del (scroll). Este metodo esta separado del motodo BUSCAR debido a la falta de cosistencia y relaciones, además de estrategia para una SPA "progresiva o con margen de crecimiento y mejora", incluido la reutilización de codigo. 
  - **static obtener() {}**
    - El metodo OBTENER es para pintar los datos en la vista o interfaz, además de ser reutilizado para el autocargado según el (scroll) y la funcionaliza de busqueda.
  - **static salida() {}**
    - El metodo SALIDA se utiliza en conjunto al de OBTENER, pero en este caso se utiliza para controlar o regular las diferentes resultados arrojados por la API, en la solicitud predeterminada, autocargado según el (scroll) y los resultados de busqueda.
  - **static subTipos() {}**
    - El metodo SUBTIPOS es utilizado para solicitar los datos restantes que serán cargados por defecto además de reutilizarse para autocargado (scroll) y de busqueda, los cuales se encuentran separados de la API principal y que tiene que ser solicitados por numero o ID que identifica al Pokemon en especifico. Se carga de manera asincronica, o sea de forma automatica despues de realizada la solicitud del Pokemon.
  - **static detalles() {}**
    - El metodo DETALLES tiene el mismo comportamiento que el metodo COLOCAR, con la diferencia de que este solicita de manera singular según el ID del Pokemon y se visualiza en un modal separado.
  - **static detallar() {}**
    - El metodo DETALLAR tiene la misma finalidad que el metodo SUBTIPOS, pero este se utilizar con la solicitud del metodo DETALLES y obtiene mas datos de la API.
  - **static colocarBusqueda() {}**
    - El metodo COLOCARBUSQUEDA solicita y reemplaza la visualización del metodo COLOCAR y viceverza. Este metodo reutiliza todos los metodos que utiliza el metodo COLOCAR con la excesión del metodo DESPLAZARSE el cual no es necesario en este caso. 
  - **static desplazarse() {}**
    - El metodo DESPLAZARSE reutiliza el metodo COLOCAR pasandole un parametro de autoincremento para solicitar mas resultados o Pokemons. 



