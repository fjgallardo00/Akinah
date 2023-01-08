import {ConjuntoGeneros} from "./generos.js"


/**
 * @class Usuario
 * Asocia a un usuario con sus gustos (sobre géneros de los libros)
 */
export class Usuario{
   #gustos

   /**
    * @constructor
    * Crea un usuario que tiene gustos referidos a géneros
    * @param {ConjuntoGeneros} gustos - Conjunto de gustos
    */
   constructor(gustos){
      this.#gustos = gustos
   }

   
   /**
    * @returns {Set} Devuelve un set que es el conjunto de gustos/géneros del usuario
    */
   get gustos(){
      return this.#gustos.generos
   }


   set gustos(nuevosGustos){
      this.#gustos = nuevosGustos
   }

}
