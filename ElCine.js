// Datos deben ser globales
import Pelicula from '/funcion';
import cartelera from '/cartelera';
const peliculas = [];


  // funcion que crea la cartelera 


  cartelera();
  
  // funcion que actualiza el listado de peliculas
  const listado = () => {
    document.querySelector('#pelicula').innerHTML = peliculas.map(pelicula => {
      // los options tienen un atributo que se llama disable, deben sumarlo si se llego al limite de la pelicula

      let limite = '';
      if(pelicula.people == pelicula.capacity){
        limite = `<option value="${pelicula.id}" disabled>${pelicula.name}</option>`;
      } else {limite = `<option value="${pelicula.id}">${pelicula.name}</option>`;
      }
      return limite;
    });
  };

  listado();
  // boton que se encarga de sumar una nueva pelicula
  document.querySelector('#nueva').addEventListener('click', () => {

    const pelicula = document.querySelector('#datos').value.split(','); 
  
    const x = new Pelicula(pelicula[0], pelicula[1], pelicula[2], pelicula[3], pelicula[4])
  
    peliculas.push(x);
    cartelera();
    listado();
  });
  
  
  document.querySelector('#guardar').addEventListener('click', () => {
    const numero = parseInt(document.querySelector('#numero').value);
    const peliculaSeleccionada = [...document.querySelector('#pelicula').selectedOptions].shift().value;
  
    
    peliculas.map(pelicula => {
      if(pelicula.id == peliculaSeleccionada){
        pelicula.people = pelicula.people + numero;
      }
    })
    cartelera();
    listado();
  });