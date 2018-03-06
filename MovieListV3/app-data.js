var dataModule = (function(){
var data = {
    movieList: [],
}
 function Movie(title, genre, length){
     this.title = title;
     this.genre = genre;
     this.length = length;
 }
 Movie.prototype.getInfo = function(){
     return this.title + ", " + this.genre + ", " + this.length + "min"
 }

 function addMovie(movieData){
     var movie = new Movie(movieData.title, movieData.genre, movieData.length)
     data.movieList.push(movie);
     return movie
 }

 return{
     addMovie: addMovie,
     data:data
     
 }


}());