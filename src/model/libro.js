import {ConjuntoGeneros} from "./generos.js"

/**
 * @class Libro Representa un libro
 * Encapsula la información del título, autor, descripción y gérenos
 * que definen a un libro
 */
export class Libro{
   #titulo
   #autor
   #descripcion
   #generos

   /**
    * @constructor
    * @param {string} titulo - Titulo del libro
    * @param {string} autor - Autor del libro
    * @param {string} descripcion - Descripción del libro
    * @param {Set} generos - Géneros asociados al libro
    */
   constructor(titulo, autor, descripcion, generos){
      this.#titulo = titulo
      this.#autor = autor
      this.#descripcion = descripcion
      this.#generos = new ConjuntoGeneros(generos)
   }

   get titulo(){
      return this.#titulo
   }


   get autor(){
      return this.#autor
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
