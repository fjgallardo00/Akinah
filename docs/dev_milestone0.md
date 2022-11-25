# Desarrollo del modelo del problema
La lógica de negocio se basa en realizar recomendaciones de libros según los gustos
del usuario. Se usará el algoritmo de Pearson para calcular la similitud de los libros
con los gustos del usuario. Por tanto se necesitan como mínimo dos conjuntos de datos:

1. Los gustos del usuario
2. Los posibles libros a leer

Para aplicar el algoritmo de similitud, estos datos se han de poder comparar o relacionar.

¿Qué son los gustos del usuario? En la descripción de este problema ya se proporciona
una respuesta a esta pregunta. Los gustos se basarán en los géneros de los libros.

Los géneros literarios son el narrativo, lírico, dramático, etc. Dentro del narrativo
encontramos subgéneros como lo son la novela, que a su vez se puede clasificar en ciencia ficción,
policíacas, de amor, etc.

[Goodreads](https://www.goodreads.com/) ofrece una serie de clasificaciones para cada libro.
Estas son creadas por los usuarios y no hay ningún estándar o convenio, de manera que
no son los géneros descritos anteriormente. Se plantea el issue #10.

Como solución se propone definir nuestra propia clasificación de libros en base
a los más populares de Goodreads. En **src/model/generos.js** se define un 
*enumerado* con los géneros que se proponen. En JavaScript no existen los enumerados
pero se pueden emular creando un objeto con propiedades, que son pares 
clave-valor. Lo importante son las claves, que
serán cada miembro del enumerado. El valor es irrelevante, no queriendo decir que no haya
que tener cuidado con él. Por eso se utilizará el objeto **Symbol** de JavaScript para dar 
valores únicos a las claves, de manera que cada clave es distinta de otra y 
de cualquier otro enumerado (ya que las comparaciones se hacen por el valor de estas).

Este enumerado será fijo e inmutable, por lo que se opta por usar el método **Object.freeze()**. No se pueden modificar las claves ni añadir nuevas.