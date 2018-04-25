"use strict"
var movies = [];
var festival = new Festival();
//define actions
var createMovieButton = document.querySelector('.create-movie');
createMovieButton.addEventListener('click', function () {
    createMovie()
})
var createProgramButton = document.querySelector('.create-program');
createProgramButton.addEventListener('click', function () {
    createProgram()
})
var addMovieButton = document.querySelector('.add-movie');
addMovieButton.addEventListener('click', function () {
    addMovie()
})
function createMovie() {
    var title = document.querySelector('.movie-title');
    var length = document.querySelector('.movie-length');
    var genreSelectElement = document.querySelector('.genre-select');
    var genreOptionElement = genreSelectElement.options[genreSelectElement.selectedIndex]
    var errorElement = document.querySelector('.movie-error');
    var moviesElement = document.querySelector('.movie-list');
    var moviesSelectElement = document.querySelector('.movie-select');
    var errorDisplay = document.querySelector('.movie-error')
    

    var titleValue = title.value.trim()
    var lengthValue = length.value.trim()
    var genreValue = genreOptionElement.value.trim();

    var isValidInput = titleValue && lengthValue && genreValue
    if (!isValidInput) {
        errorDisplay.textContent = "All fields are required"
        return;
    }
    errorDisplay.textContent = "";
    // creating instances of objects
    var genreObject = new Genre(genreValue)
    
    var movieObject = new Movie(titleValue, genreObject, lengthValue);

    errorDisplay.textContent = "";
    movies.push(movieObject)

    var movieListHTML = "<ul>";
    var moviesSelectOptionsHTML = '<option value="none">-</option>'
    for(var i = 0; i < movies.length; i++){
        var movie = movies[i]
        movieListHTML += "<li>" + movie.getData() + "</li>"
        moviesSelectOptionsHTML += '<option value="' + i + '">' + movie.title + '</option>'
    }

    movieListHTML += "</ul>"

    moviesElement.innerHTML = movieListHTML;
    moviesSelectElement.innerHTML=moviesSelectOptionsHTML

    title = "";
    length = "";
    genreSelectElement.selectedIndex = 0;
}

function createProgram(){
    var program = document.querySelector('.program-date')
    var errorDisplay = document.querySelector('.program-error')
   
    
    var programValue = program.value
    if (!programValue) {
        errorDisplay.textContent = "Please select date"
        return;
    }
    errorDisplay.textContent = "";

    var programObject = new Program(programValue)

    festival.addProgram(programObject);  
    updateProgramList() 
    program.value = "";
}

function addMovie(){
    var movieSelectElement = document.querySelector('.movie-select');
    var movieOptionElement = movieSelectElement.options[movieSelectElement.selectedIndex]

    var programSelectElement = document.querySelector('.program-select');
    var programOptionElement = programSelectElement.options[programSelectElement.selectedIndex]

    var errorDisplay = document.querySelector('.assign-error')

    var movieIndex = movieOptionElement.value
    var programIndex = programOptionElement.value

    if (!movieIndex && !programIndex) {
        errorDisplay.textContent = "Select program and movie";
        
        return;        
    }

    errorDisplay.textContent = "";
    var selectedMovie = movies[movieIndex]
    var selectedProgram = festival.listOfPrograms[programIndex]
   
    selectedProgram.addMovie(selectedMovie);
    updateProgramList()
    movieSelectElement.selectedIndex = 0;
    programSelectElement.selectedIndex = 0;
}

function updateProgramList(){
    var programListArray = festival.listOfPrograms
    var programList = document.querySelector('.program-list')
    var programsSelectElement = document.querySelector('.program-select');
    var programListHTML = "<ul>";
    var programsSelectOptionsHTML = '<option value="none">-</option>'
    for (var i = 0; i < festival.listOfPrograms.length; i++) {
        var program = programListArray[i];
        programListHTML += "<li>" + program.getData() + "</li>";
        programsSelectOptionsHTML += '<option value="' + i + '">' + program.getData() + '</option>'
    }
    programListHTML += "</ul>";

    programList.innerHTML = programListHTML;
    programsSelectElement.innerHTML = programsSelectOptionsHTML;
}