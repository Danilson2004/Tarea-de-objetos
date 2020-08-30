function Pelicula (id = '', name = '', year = '', people = 0, capacity = 0){
    this.id = id;
    this.name = name;
    this.year = year;
    this.people = parseInt(people);
    this.capacity = parseInt(capacity);
  
    this.percentage = function(){
      return `${(this.people * 100/this.capacity)}`}
  }
 
    export default Pelicula;