"use strict";

var movieArr = [];
var programArr = [];
var movieInProgramArr = [];
var totalMoviesLength = 0;

function Movie(title, genre, length) {
    this.title = title.toUpperCase();
    this.genre = genre;
    this.length = length;

}
Movie.prototype.getData = function () {
    return this.title + ", " + " duration: " + this.length + " min, " + getGenre(this.genre);

}

function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
}
Program.prototype.addMovie = function (movie) {
    return this.listOfMovies.push(movie);
}
Program.prototype.getData = function () {
    
    return this.date.getDate() + "." + this.date.getMonth() + "." + this.date.getFullYear() + " number of movies " + movieInProgramArr.length + " Program duration: " + tba;
}



document.querySelector("#createMovie").addEventListener("click", function () {
    createMovie()
})
document.querySelector("#createProgram").addEventListener("click", function () {
    createProgram()
})
document.querySelector("#addMovie").addEventListener("click", function () {
    addMovieToProgram()
})


function createMovie() {
    
    var titleInput = document.querySelector("#movie-title");
    var lengthInput = document.querySelector("#movie-length");
    var movieInput = titleInput.value;
    var lengthOfMovie = parseInt(lengthInput.value);
    var select = document.querySelector("#movie-genre");
    var genreInput = select.options[select.selectedIndex];
    var genreInputValue = genreInput.text;
    var movie1 = new Movie(movieInput, genreInputValue,lengthOfMovie);
    var paragraphMoviesLength = document.querySelector('.moviesLength').firstChild;
    movieArr.push(movie1);
    makeList(movieArr);
    makeMovieSelect(movieArr);
    paragraphMoviesLength.textContent = "All movies length: " + getTotalLength() + " min";
    
    titleInput.value = "";
    lengthInput.value = "";
    select.selectedIndex = 0;
    
}

function createProgram() {
    var inputdate = document.querySelector('#date').value;
    var program = new Program(inputdate);
    
    programArr.push(program);
    makeDateList(programArr);
    makeProgramSelect(programArr);
    
    
    
}
function addMovieToProgram(){
    var movieSelectElement = document.querySelector('.output2').firstChild;
    var movieOptionElement = movieSelectElement.options[movieSelectElement.selectedIndex];
    var programSelectElement =  document.querySelector('.output2').lastChild;
    var programOptionElement = programSelectElement.options[programSelectElement.selectedIndex];
    
    var movieIndex = movieOptionElement.value;
    var programIndex = programOptionElement.value;
    var selectedMovie = movieArr[movieIndex];
    var selectedProgram = programArr[programIndex];
    
    movieInProgramArr.push(selectedMovie);
    makeProgramList(movieInProgramArr, programArr);
    
    
    
    movieSelectElement.selectedIndex = 0;
    programSelectElement.selectedIndex = 0;
    
    
}

function getGenre(datastring) {
    var firstLetter = 0;
    var lastLetter = datastring.length - 1;
    var abbr = datastring.charAt(firstLetter) + datastring.charAt(lastLetter);
    return abbr.toUpperCase();
}

function calculateTotalLength() {
    var total = 0;
    movieArr.forEach(function (currentMovie) {
        total += currentMovie.length;
    });
    totalMoviesLength = total;
}

function getTotalLength() {
    calculateTotalLength();
    return totalMoviesLength;
}


//LI for movies
var div = document.querySelector('.output');
var list = document.createElement('ul');
div.appendChild(list)

function makeList(Arr) {
    var li = document.createElement('li');
    li.textContent = Arr[Arr.length - 1].getData();
    list.appendChild(li);
}


//LI for programs
var div1 = document.querySelector('.output1');
var list1 = document.createElement('ul');
div1.appendChild(list1)

function makeDateList(Arr) {
    var li = document.createElement('li');
    li.textContent = Arr[Arr.length - 1].getData();
    list1.appendChild(li);

}

function makeProgramList(Arr, Arr1){
    
    var li = document.createElement('li');
    li.textContent =Arr1[Arr1.length-1].getData() + "; " + Arr[Arr.length - 1].getData() ;
    list1.appendChild(li);
   
    
}

//select for movies
var div2 = document.querySelector('.output2');
var select = document.createElement('select');
div2.appendChild(select);

function makeMovieSelect(Arr){
    var option = document.createElement('option');
    
        option.value = Arr.length-1;
        option.textContent = Arr[Arr.length-1].getData();
        select.appendChild(option);
    
    
}
//select for programs
var div2 = document.querySelector('.output2');
var select1 = document.createElement('select');
div2.appendChild(select1);

function makeProgramSelect(Arr){
    var option1 = document.createElement('option');
    
        option1.value = Arr.length-1;
        option1.textContent = Arr[Arr.length-1].getData();
        select1.appendChild(option1);
    
    
}





//Program














// // Markova verzija

// var dataController = (function () {

//     var data = {
//         movies: [],
//         totalMoviesLength: 0
//     };

//     // Movie constructor
//     function Movie(title, length, genre) {
//         this.title = title;
//         this.length = length;
//         this.genre = genre;
//     }

//     Movie.prototype.getInfo = function () {
//         return this.title + ", duration: " + this.length + "min, genre: " + getGenreAbbreviation(this.genre);
//     }

//     // Private functions used within this module
//     // Not exposed to the public
//     function getGenreAbbreviation(genreStr) {
//         var firstIndex = 0;
//         var lastIndex = genreStr.length - 1
//         var output = genreStr.charAt(firstIndex) + genreStr.charAt(lastIndex);
//         return output.toUpperCase();
//     }

//     function calculateTotalLength() {
//         var total = 0;

//         // Iterate trough movies and calculate length
//         data.movies.forEach(function (currentMovie) {
//             total += currentMovie.length;
//         });

//         // Set our new total to our data object
//         data.totalMoviesLength = total;
//     }

//     // Functions to be exported to public
//     function addMovie(title, length, genre) {
//         var movie = new Movie(title, parseFloat(length), genre);

//         data.movies.push(movie);

//         return movie;
//     }

//     function getTotalLength() {

//         // calculate total data before returning
//         calculateTotalLength();

//         return data.totalMoviesLength;
//     }

//     // This is only for TEST
//     function logData() {
//         console.log(data);
//     }

//     return {
//         addMovie: addMovie,
//         getTotalLength: getTotalLength,
//         // ONLY FOR TEST
//         log: logData
//     };

// })();

// var UIController = (function () {

//     var DOMStrings = {
//         inputTitle: '.movie-title',
//         inputLength: '.movie-length',
//         selectGenre: '.genre-select',
//         containerMovieList: '.movie-list ul',
//         containerError: '.movie-error',
//         buttonAddMovie: '.create-movie',
//         formElement: 'form',
//         containerTotalLength: '.total-length span'
//     }

//     function collectInput() {
//         var titleElement = document.querySelector(DOMStrings.inputTitle);
//         var lengthElement = document.querySelector(DOMStrings.inputLength);
//         var genreSelectElement = document.querySelector(DOMStrings.selectGenre);
//         var genreOptionElement = genreSelectElement.options[genreSelectElement.selectedIndex];

//         var result = {
//             title: titleElement.value,
//             length: lengthElement.value,
//             genre: genreOptionElement.value
//         }

//         return result;
//     }

//     function displayListItem(movie) {
//         var listEl = document.querySelector(DOMStrings.containerMovieList);

//         var htmlItem = "<li>" + movie.getInfo(); + "</li>"

//         listEl.insertAdjacentHTML('beforeend', htmlItem);
//     }

//     function clearFormInputs() {

//         // Reset forma data
//         document.querySelector(DOMStrings.formElement).reset();

//         // Reset error if any
//         document.querySelector(DOMStrings.containerError).textContent = "";

//         // Set focus to title input
//         document.querySelector(DOMStrings.inputTitle).focus();
//     }

//     function showError(input) {
//         var errorMsg = 'Unknown error!';

//         if (!input.title) {
//             errorMsg = "Enter title!"
//         } else if (!input.length) {
//             errorMsg = "Enter length!"
//         } else if (!input.genre) {
//             errorMsg = "Select genre!"
//         }

//         document.querySelector(DOMStrings.containerError).textContent = errorMsg;
//     }

//     function displayTotalLength(tLength) {

//         // If length is not passed set default value
//         tLength = tLength || '-';

//         document.querySelector(DOMStrings.containerTotalLength).textContent = String(tLength);
//     }

//     function getDOMStrings() {
//         return DOMStrings;
//     }

//     return {
//         getInput: collectInput,
//         displayListItem: displayListItem,
//         displayTotalLength: displayTotalLength,
//         getDOMStrings: getDOMStrings,
//         clearInputs: clearFormInputs,
//         displayError: showError
//     };

// })();

// var mainController = (function (dataCtrl, UICtrl) {

//     function setupEventListeners() {
//         var DOM = UICtrl.getDOMStrings();

//         document.querySelector(DOM.buttonAddMovie).addEventListener('click', function () {
//             ctrlAddMovieItem();
//         });

//         document.addEventListener('keydown', function (event) {
//             if (event.keyCode === 13) {
//                 ctrlAddMovieItem();
//             }
//         });
//     }

//     function ctrlUpdateTotalLength() {

//         // 1. Get calculated length
//         var totalLength = dataCtrl.getTotalLength();

//         // 2. Update the UI with new total length
//         UICtrl.displayTotalLength(totalLength);
//     }

//     function ctrlAddMovieItem() {
//         // 1. get form data (UI)
//         var input = UICtrl.getInput();
//         // console.log(input);

//         // 1.1 Validate data validity
//         if (!input.title || !input.length || !input.genre) {
//             // throw new Error('Something bad happened');
//             // alert("Error!")
//             UICtrl.displayError(input);
//             return;
//         }

//         // 2. Add movie to list
//         var movie = dataCtrl.addMovie(input.title, input.length, input.genre);
//         // console.log(movie);

//         // 3. Clear form inputs
//         UICtrl.clearInputs();

//         // 4. show list on UI
//         UICtrl.displayListItem(movie);

//         // 5. Update total length UI
//         ctrlUpdateTotalLength();

//     }

//     return {
//         init: function () {
//             console.log("App has started");
//             setupEventListeners();
//         }
//     }

// })(dataController, UIController);

// mainController.init();