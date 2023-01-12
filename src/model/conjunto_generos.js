
/**
 * @class ConjuntoGeneros
 */
export class ConjuntoGeneros{

   /**
    * 
    * @returns {Set} - Conjunto de géneros global. Los valore del conjunto son
    * strings
    */
   static get GENEROS(){
      return new Set(
         [
            'ficcion', 'romantico', 'terror', 'adolescente', 'adultos', 'infantil',
            'dramatico', 'comedia', 'historia', 'misterio', 'animales', 'didactico',
            'cultura', 'otros'
         ]
      )
   }

   //--------------------------------------------------------------------------
   /**
    * Aributo de instancia
    * Subconjunto de GENEROS
    */
   #generos
   
   /**
    * @constructor
    * @param {Set} conjunto - Conjunto de géneros. Si los valores del set
    * no son géneros entonces no se añadirán
    * @post Los géneros de la instancia serán un subconjunto de @see GENEROS
    */
   constructor(conjunto){
      this.#generos = new Set()
      let GENEROS = ConjuntoGeneros.GENEROS
      // Asegura que los géneros sean un subconjunto de GENEROS
      for (let gen of conjunto){
         if (GENEROS.has(gen)){
            this.#generos.add(gen)
         }
      }
   }

   /**
    * Devuelve el conjunto de géneros
    */
   get generos(){
      return new Set(this.#generos)
   }

}
