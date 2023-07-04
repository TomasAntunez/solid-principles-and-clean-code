(() => {

  // función para obtener información de una película por Id
  function getMovieById( id: string ) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getMovieActorsById( movieId: string ) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById( id: string ) {
    console.log({ id });
  }
  
  // Crear una película
  interface Movie {
    cast:        string[];
    description: string;
    rating:      number;
    title:       string;
  }

  function createMovie({ title, description, rating, cast }: Movie ) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor( fullName: string, birthDate: Date ): boolean {
      
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if ( fullName === 'fernando' ) return false;

    console.log('Crear actor', birthDate);
    return true;        

  }


  // Continue

  const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
    if ( isDead ) return 1500;
    if ( isSeparated ) return 2500;
    if ( isRetired ) return 3000;
    return 4000;
  }


  // const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
  //   let result;
  //   if ( isDead ) {
  //     result = 1500;
  //   } else {
  //     if ( isSeparated ) {
  //       result = 2500;
  //     } else {
  //       if ( isRetired ) {
  //         result = 3000;
  //       } else {
  //         result = 4000; 
  //       }
  //     }
  //   }
    
  //   return result;
  // }

})();
