# Pokemons

# Ficheros
Las carpetas que inician con la letra "i" se refieren a la parte de la vista (interfaz) de la SPA. la carpeta "i_css" contiene los archivos de estilo (.css), mientras que la carpeta "i_iconos" contiene los iconos utilizados para visualizar el logo, decoral y adaptar el diseño a la tematica de la SPA.

En la carpeta que comienzan con la letra "l" se refieren a la parte de controladores, y sea de la dinamica de la vista o dinamica de funcionalidad de la SPA. Dentro de la carpeta aparesen dos archivos de los cuales solo se utilizan uno a la vez, los cuales se pueden usar según la preferencia del interezado.

En cuanto a la carpeta que comienzan con la letra "s" se refieren a la parte del modelo, la cual contiene un archivo con un objeto que se puede retornar y reutilizar para controlar los resultados indeceados de la (rest-api).

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

# Clases y objetos


- class Pokemon
  - constructor() {}
    - El CONSTRUCTOR tiene la parte que se inicializa al ejecutar la aplicación, esto evita errores en los argoritmos de (estilo y logica), y asigna valores predeterminados. 
  - static lanzar() {}
    - El metodo LANZAR es reutilizado para abrir y cerrar cualquier modal de la SPA, con solo unas pocas lineas y aprueba de errores.
  - static colocar() {}
    - El metodo COLOCAR se utiliza para solicitar los Pokemons, y retutilizado para autocargar mas según el comportamiento del (scroll). Este metodo esta separado del motodo BUSCAR debido a la falta de cosistencia y relaciones, además de estrategia para una SPA "progresiva o con margen de crecimiento y mejora", incluido la reutilización de codigo. 
  - static obtener() {}
    - El metodo OBTENER es para pintar los datos en la vista o interfaz, además de ser reutilizado para el autocargado según el (scroll) y la funcionaliza de busqueda.
  - static salida() {}
  - static subTipos() {}
  - static detalles() {}
  - static detallar() {}
  - static colocarBusqueda() {}
  - static desplazarse() {}



