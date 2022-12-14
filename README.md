# IV-Proyecto-Akinah

## Francisco Javier Gallardo Molina      Curso 2022 - 2023

### Descripción del proyecto

El proyecto trata de un sistema de recomendación de libros para aquellas personas que lee con regularidad y se quedan sin contenido que consumir.
Para ello se usarán datos de libros extraídos de la página de Goodreads a través de un Scraper ya realizado en otro [proyecto](https://github.com/scostap/goodreads_bbe_dataset). El objetivo es desplegar la aplicación en la nube para que los usuarios sean capaces de usar en cada momento que lo requiera, ya sean una persona independiente o una tienda de libros que pueda usarla para obtener más variedad de libros.

#### Lógica de negocio

Se trata de usar un algoritmo de recomendación en el que a cada persona se le recomiendan libros por sus géneros. Cada libro tiene distintas etiquetas asociadas a géneros en los que serán usados para la búsqueda de libros similares que el usuario quiera descubrir. Usando un algoritmo de similitud de Pearson se podrá calcular la similitud de los libros y serán ordenados por la puntuación calculada a dicho libro.

#### ¿Qué problema resuelve?

Lectores que hayan leído una cantidad de libros importante a veces no sabrá lo que le pueda gustar. Sería una recomendación que con una simple búsqueda en Internet no resuelva, pues si solo has leído dos libros de un género, con una búsqueda podrás encontrar otros ejemplares famosos acordes a la temática que se busca. Pero una vez se han leído tanta cantidad de libros, esas recomendaciones resultarán inútiles, pues esos libros recomendados seguramente ya hayan sido leídos, y se buscará algo nuevo.

### Estado del proyecto

Se han definido las historias de usuario y los milestones.

### Documentación

- [Enlace a la carpeta](https://github.com/fjgallardo00/Akinah/tree/Objetivo-1/docs)

