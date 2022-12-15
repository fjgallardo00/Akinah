/**
 * @class PuntuacionLibro representa una pareja que
 * asocia un identificador de un libro a un valor numérico
 */
export class PuntuacionLibro{
   #idLibro
   #puntuacion

   /**
    * 
    * @param {string} idLibro 
    * @param {number} puntuacion 
    */
   constructor(idLibro, puntuacion){
      this.#idLibro = idLibro
      this.#puntuacion = puntuacion
   }

   get idLibro(){
      return this.#idLibro
   }

   get puntuacion(){
      return this.#puntuacion
   }

   /**
    * 
    * @param {PuntuacionLibro} obj 
    * @returns {boolean} True si la puntuación de this es menor estricto
    * que la puntiación de obj. False en caso contrario
    */
   menorQue(obj){
      return this.#puntuacion < obj.#puntuacion
   }

}
