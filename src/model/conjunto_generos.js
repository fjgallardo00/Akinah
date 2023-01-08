
/**
 * @class ConjuntoGeneros
 */
export class ConjuntoGeneros{
   /**
    * Atributo de clase
    * Conjunto de géneros general
    */
   static #GENEROS = new Set(
      [
         'ficcion', 'romantico', 'terror', 'adolescente', 'adultos', 'infantil',
         'dramatico', 'comedia', 'historia', 'misterio', 'animales', 'didactico',
         'cultura', 'otros'
      ]
   )

   /**
    * Devuelve una copia del conjunto de géneros @see GENEROS
    */
   static get GENEROS(){
      return new Set(this.#GENEROS)
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
      this.#setGeneros(conjunto)
   }

   /**
    * Devuelve el conjunto de géneros
    */
   get generos(){
      return this.#generos
   }


   // MÉTODOS PRIVADOS
   /**
    * Asigna un nuevo conjunto a los géneros
    * @param {Set} conjunto - Conjunto de géneros. Solo se añadirán
    * los valores que se encuentren en @see GENEROS
    * @post Los géneros serán un subconjunto de @see GENEROS
    */
   #setGeneros(conjunto){
      this.#generos.clear()

      // Asegura que los géneros sean un subconjunto de GENEROS
      for (let gen of conjunto){
         if (ConjuntoGeneros.#GENEROS.has(gen)){
            this.#generos.add(gen)
         }
      }
   }

}
