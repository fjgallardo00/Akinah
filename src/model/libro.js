import {ConjuntoGeneros} from "./generos.js"

/**
 * @class Libro Representa un libro
 * Encapsula la información del título, autor, idioma, descripción y gérenos
 * que definen a un libro
 */
export class Libro{
   #titulo
   #autor
   #idioma
   #descripcion
   #generos

   /**
    * @constructor
    * @param {string} titulo - Titulo del libro
    * @param {string} autor - Autor del libro
    * @param {string} idioma - Idioma en el que se haya escrito el libro
    * @param {string} descripcion - Descripción del libro
    * @param {Set} generos - Géneros asociados al libro
    */
   constructor(titulo, autor, idioma, descripcion, generos){
      this.#titulo = titulo
      this.#autor = autor
      this.#idioma = idioma
      this.#descripcion = descripcion
      this.#generos = new ConjuntoGeneros(generos)
   }

   get titulo(){
      return this.#titulo
   }


   get autor(){
      return this.#autor
   }


   get idioma(){
      return this.#idioma
   }


   get descripcion(){
      return this.#descripcion
   }

   /**
    * Devuelve el conjunto (Set) de géneros asociados al libro
    */
   get generos(){
      return this.#generos.generos // getter de ConjuntoGeneros
   }
}
