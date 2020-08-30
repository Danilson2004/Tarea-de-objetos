const cartelera = () => {
    document.querySelector('#cine').innerHTML = peliculas.map(pelicula => {
      const {name, year, people, capacity} = pelicula;
      // Faltaría sumar el porcentaje que representa el numero de personas sobre la capacidad
      let porcentaje = pelicula.percentage();
      // Poner dentro de una etiqueta strong cuando llegue al 100%

      if (porcentaje == 100){
        porcentaje = `<strong>${pelicula.percentage()}</strong>`;
      } else {
        porcentaje = pelicula.percentage();
      };

      return `<div>
      <h3>${name}</h3>
      <p>Año: ${year}</p>
      <p>Personas: ${people}</p>
      <p>Capacidad: ${capacity}</p>
      <p>Porcentaje: ${porcentaje}</p>
      </div>`;
    });
};

export default cartelera;