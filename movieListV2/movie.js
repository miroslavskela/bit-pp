var dataCtrl = (function(){
 var data = {
     movieList: []
 }

 function Movie(title, genre, length){
     this.title = title;
     this.genre = genre;
     this.length = length;
 }
 Movie.prototype.getData = function(){
     return this.title + ", " + this.length + "min, " + this.genre
 };

 function addMovie(movieData){
     var movie = new Movie(movieData.title, movieData.genre, movieData.length)
     data.movieList.push(movie)
     return movie;
 }
 function testLog(){
     console.log(data);
     
 }

 return {
     createMovie:addMovie
 }
 
})();

var uiCtrl = (function(){

var DOMSelectors = {
    movieTitleElement: '.movie-title',
    movieGenreElement: '.genre-select',
    movieLengthElement: '.movie-length',
    createMovieButton: '.create-movie'
}

function getFormData(){
    var titleElement = document.querySelector(DOMSelectors.movieTitleElement)
    var lengthElement = document.querySelector(DOMSelectors.movieLengthElement)
    var genreSelect = document.querySelector(DOMSelectors.movieGenreElement)

    var title = titleElement.value;
    var length = parseInt(lengthElement.value);
    var genre = genreSelect.options[genreSelect.selectedIndex].value

    var formInputObj = {
        title:title,
        length:length,
        genre:genre
    }

    return formInputObj;
}

function showMovieData(movie){
    console.log(movie.getData()); 
}

return{
    domSelectors:DOMSelectors,
    collectInputData:getFormData,
    showMovieData:showMovieData
}
})();


var ctrlModule = (function (dataCtrl, uiCtrl){
    // 1. 
   document.querySelector(uiCtrl.domSelectors.createMovieButton).addEventListener('click', function(event){
       // 2. getFormData() from ui module
       var formMovie = uiCtrl.collectInputData()
        // 3. add Movie to list
        var movieInstance = dataCtrl.createMovie(formMovie);

        //4. show movie data 
        console.log(movieInstance);
        uiCtrl.showMovieData(movieInstance)
        

   } )
})(dataCtrl, uiCtrl);