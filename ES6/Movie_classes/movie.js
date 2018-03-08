class Genre {
    constructor(name){
        this.name = name;
    }

    createAcronym() {
        const firstLetter = this.name.charAt(0).toUpperCase();
        const lastLetter = this.name.charAt(this.name.length - 1).toUpperCase()
        return firstLetter + lastLetter
    }    
}

class Movie {
    constructor(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    getData() {

        return `${this.title}, ${this.length}min, ${this.genre}`
    }
}

class Program {
    constructor(date) {
        this.date = new Date(date);
        this.movieList = [];
        this.totalNumberOfMovies = 0
    }

    getDate() {

        return this.date.toDateString()
    }

    displayMovies() {
        let result = ""
        this.movieList.forEach(movie => {            
            result += `      ${movie.getData()} \n`            
        });

        return result
    }

    addMovie(movie) {
        this.movieList.push(movie) 
        this.totalNumberOfMovies++       
    }

    getData() {
        //do this
    }
}

class Festival {
    constructor(name){
        this.name = name;
        this.programList = []
        this.numberOfFestivalMovies = 0;
    }

    addProgram(program) {
            this.programList.push(program)
    }
}


function createMovie(title, genre, length){
    let genre1 = new Genre(genre)

    return new Movie (title, genre1.createAcronym(), length)
}

const movie1 = createMovie("frr", "action", 123)
const movie2 = createMovie("prr", "action", 123)
const movie3 = createMovie("grr", "action", 123)

const prog1 = new Program("2018-3-3")
const prog2 = new Program("2018-4-4")

prog1.addMovie(movie1)
prog1.addMovie(movie2)
prog2.addMovie(movie3)

console.log(prog1.displayMovies())


const fest = new Festival("beer fest") 



