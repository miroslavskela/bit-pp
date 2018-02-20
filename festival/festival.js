"use strict";

(function () {

    function Genre(name) {
        this.name = name;
        this.getData = function () {
            var firstLetter = this.name.charAt(0);
            var lastletter = this.name.charAt(name.length - 1);
            var result = firstLetter + lastletter;
            return result.toUpperCase();
        }
    }

    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
        this.getData = function () {
            return this.title + ", " + this.length + " min, " + this.genre.getData();
        }
    }


    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];
        this.addMovie = function(movie){
            return this.listOfMovies.push(movie);
        }
        this.numberOfMovies = function(){
            return this.listOfMovies.length;
        }
        this.getProgramLength = function(){
            var length = 0;
            for (var i = 0; i < this.listOfMovies.length; i++){
            var movie = this.listOfMovies[i];
            length+=movie.length;}
            return length;
        }
        this.getData = function(){
            var output = "";
            var myDate = this.date.getFullYear();
            var output = myDate + ", program duration, " + this.getProgramLength() + "min\n"
            for(var i = 0; i < this.listOfMovies.length; i++){
                var movie = this.listOfMovies[i]
                output+="\t" + movie.getData() + "\n"
            }
            return output;
        }
            
    }

   /* function Festival(name, numberOfAllMovies) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfAllMovies = numberOfAllMovies;
        this.addProgram = function(program){

        }
    }*/


    var action = new Genre("action");
   // console.log(action.getData());

    var movie = new Movie("Svemirci su krivi za sve", action, 90);
    var movie1 = new Movie("Svemirci su krivi za sve", action, 90);
    var program1 = new Program("2006")
    //console.log(movie.getData());


    var program1 = new Program("11/2/2107");
    program1.addMovie(movie);
    program1.addMovie(movie1);
    //console.log(program1.listOfMovies);
    console.log(program1.getData());



})();