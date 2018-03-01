"use strict";

(function () {

    function Genre(name) {
        this.name = name;
    };

    Genre.prototype.getData = function () {
        var firstLetter = this.name.charAt(0);
        var lastletter = this.name.charAt(this.name.length - 1);
        var result = firstLetter + lastletter;
        return result.toUpperCase();
    }


    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function () {
        return this.title + ", " + this.length + " min, " + this.genre.getData();
    }
    // function movie


    function Program(date) {
        this.date = new Date(date);
        this.myDay = this.date.getDate();
        this.myMonth = this.date.getMonth() + 1;
        this.myDate = this.date.getFullYear();
        this.fullDate = this.myDay + "." + this.myMonth + "." + this.myDate;
        this.listOfMovies = [];
    }

    Program.prototype.addMovie = function (movie) {
        return this.listOfMovies.push(movie);
    }
    Program.prototype.numberOfMovies = function () {
        return this.listOfMovies.length;
    }
    Program.prototype.getProgramLength = function () {
        var length = 0;
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i];
            length += movie.length;
        }
        return length;
    }
    Program.prototype.getData = function () {
        var output = "";
        var output = this.fullDate + ", program duration, " + this.getProgramLength() + "min\n"
        for (var i = 0; i < this.listOfMovies.length; i++) {
            var movie = this.listOfMovies[i]
            output += "\t\t" + movie.getData() + "\n"
        }
        return output;
    }
    // function program getData important

    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }

    Festival.prototype.numberOfAllMovies = function () {
        var num = 0;
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            num += this.listOfPrograms[i].numberOfMovies();

        }
        return num;
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);

    };
    Festival.prototype.getData = function () {
        var output = this.name + " has " + this.numberOfAllMovies() + " movie titles" + "\n"
        var output1 = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            var program = this.listOfPrograms[i];
            output1 += "\t" + program.getData();

        }
        return output + output1;
    }
    // function festival


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
    var program2 = new Program("2018-04-07")
    program1.addMovie(movie);
    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program2.addMovie(movie3);
    var weekendFestival = new Festival("Weekend festival")
    weekendFestival.addProgram(program1);
    weekendFestival.addProgram(program2);
    //console.log(program1.listOfMovies);
    console.log(weekendFestival.getData());









})();