import {ConjuntoGeneros} from "./conjunto_generos.js"

/**
 * @class Libro Representa un libro
 * Encapsula la información del título, autor y gérenos
 * que definen a un libro
 */
export class Libro{
   #titulo
   #autor
   #generos

   /**
    * @constructor
    * @param {string} titulo - Titulo del libro
    * @param {string} autor - Autor del libro
    * @param {ConjuntoGeneros} generos - Géneros asociados al libro
    */
   constructor(titulo, autor, generos){
      this.#titulo = titulo
      this.#autor = autor
      this.#generos = generos
   }

   get titulo(){
      return this.#titulo
   }


   get autor(){
      return this.#autor
   }


   /**
    * @returns {Set} - Devuelve el conjunto de géneros asociados al libro.
    * Los valores del conjunto son strings
    */
   get generos(){
      return this.#generos.generos // getter de ConjuntoGeneros
   }
}
