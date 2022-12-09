"use strict"

/**
 * @class Libro Representa un libro
 * Asocia un identificador de un libro con los géneros que lo clasifican
 */
export class Libro{
   #id
   #generos

   /**
    * @constructor
    * @param {string} id - Identificador del libro
    * @param {Set} generos - Géneros asociados al libro
    */
   constructor(id, generos){
      this.#id = id
      this.#generos = generos
   }

   get id(){
      return this.#id
   }

   get generos(){
      return this.#generos
   }
}
