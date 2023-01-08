import {ConjuntoGeneros} from "./generos.js"


/**
 * @class Usuario
 * Asocia a un usuario con sus gustos
 */
export class Usuario{
   #gustos

   /**
    * @constructor
    * Crea un usuario que tiene gustos referidos a géneros
    * @param {Set} gustos - Conjunto de gustos. Estos son valores string que representan
    * un género cada uno. Solo se añadirán los géneros que pertenezcan a la clase
    * @see ConjuntoGeneros
    */
   constructor(gustos){
      this.#gustos = new ConjuntoGeneros(gustos)
   }

   
   /**
    * @returns {ConjuntoGeneros} Devuelve un objeto que es un conjunto de géneros
    */
   get gustos(){
      return this.#gustos
   }

}
