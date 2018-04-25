// (function () {

    function Genre(name) {
        this.name = name;
    }

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
        return this.title + ", " + this.length + ", " + this.genre.getData()
    }


    function Program(date) {
        this.date = new Date(date);
        this.listOfMovies = [];

    }

    Program.prototype.getDate = function () {
        var myDate;
        var day = this.date.getDate();
        var month = this.date.getMonth() + 1;
        var year = this.date.getFullYear();
        return myDate = day + "." + month + "." + year

    }

    Program.prototype.addMovie = function (movie) {
        this.listOfMovies.push(movie)
    }

    Program.prototype.getData = function () {
        var length = "";
        var output = "";
        for (var i = 0; i < this.listOfMovies.length; i++) {
            length += this.listOfMovies[i].length
        }

        // for (var i = 0; i < this.listOfMovies.length; i++) {
        //     var movie = this.listOfMovies[i]
        //     output += "\t\t" + movie.getData() + "\n"
        // }
        if (!length) {
            return this.getDate() + ", program duration: TBA";
        }
    
      
        return this.getDate() + ", " +this.listOfMovies.length + " movies, duration: " + parseInt(length) + "min"
    }

    Program.prototype.numberOfMovies = function () {
        return this.listOfMovies.length;
    }


    function Festival(name) {
        this.name = name;
        this.listOfPrograms = [];
    }

    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program)
    }

    Festival.prototype.numberOfAllMovies = function () {
        var num = 0;
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            num += this.listOfPrograms[i].numberOfMovies();
        }
        return num
    }

    Festival.prototype.getData = function () {
        var result = this.name + " has " + this.numberOfAllMovies() + " movie titles \n"
        var result1 = "";
        for (var i = 0; i < this.listOfPrograms.length; i++) {
            var program = this.listOfPrograms[i]
            result1 += "\t" + program.getData()
        }
        return result + result1
    }

    
    function createMovie(title, length, genre) {
        return new Movie(title, genre, length)
    }

    function createProgram(date) {
        return new Program(date)
    }

    // var action = new Genre("action");
    // var drama = new Genre("drama");
    // var comedy = new Genre("comedy");
    // var festival1 = new Festival("SoFest")
    // var program1 = new Program("04.12.2018")
    // var program2 = new Program("04.15.2018")
    // var movie1 = createMovie("Sakupljaci Perja", 125, action)
    // var movie2 = createMovie("Sakupljaci Perja", 125, drama)
    // var movie3 = createMovie("Sakupljaci Perja", 125, comedy)
    // var movie4 = createMovie("Sakupljaci Perja", 125, action)

    // festival1.addProgram(program1)
    // festival1.addProgram(program2)
    // program1.addMovie(movie1)
    // program1.addMovie(movie2)
    // program1.addMovie(movie3)
    // program1.addMovie(movie4)
    // program2.addMovie(movie1)
    // program2.addMovie(movie2)
    // program2.addMovie(movie3)
    // program2.addMovie(movie4)
    // console.log(festival1.getData())
// }())