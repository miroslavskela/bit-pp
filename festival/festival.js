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
        this.myDay = this.date.getDate();
        this.myMonth = this.date.getMonth() + 1;
        this.myDate = this.date.getFullYear();
        this.fullDate = this.myDay + "." + this.myMonth + "." + this.myDate;
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
            var output = this.fullDate + ", program duration, " + this.getProgramLength() + "min\n"
            for(var i = 0; i < this.listOfMovies.length; i++){
                var movie = this.listOfMovies[i]
                output+="\t" + movie.getData() + "\n"
            }
            return output;
        }
            
    }

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
        this.numberOfAllMovies = function(){
            var num = 0;
            for(var i = 0; i < this.listOfPrograms.length; i++){
                num+=this.listOfPrograms[i].numberOfMovies();
               
            } return num;}
            
            this.addProgram = function(program){
            this.listOfPrograms.push(program);
        
        };
    }


    var action = new Genre("action");
    var drama = new Genre("drama");
    var comedy = new Genre("comedy");
   // console.log(action.getData());

    var movie = new Movie("Svemirci su krivi za sve", action, 90);
    var movie1 = new Movie("Ko to tamo peva", drama, 101);
    var movie2 = new Movie("Umri muski", action, 119);
    var movie3 = new Movie("Why him", comedy, 90);
    
    //console.log(movie.getData());


    var program1 = new Program("2018-04-05");
    var program2 = new Program ("2018-05-07")
    program1.addMovie(movie);
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    var weekendFestival = new Festival ("Weekend festival")
    weekendFestival.addProgram(program1);
    weekendFestival.addProgram(program2);
    //console.log(program1.listOfMovies);
    console.log(program1.getData(),program2.getData());
    console.log(weekendFestival.numberOfAllMovies());
    
    
    
    
    



})();