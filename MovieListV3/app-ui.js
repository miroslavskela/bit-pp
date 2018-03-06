var uiModule = (function () {
    var DOMSelectors = {
        movieInputElement : ".movie-title",
        lengthInputElement : ".movie-length",
        movieSelectELement : ".genre-select",
        addMovieButton : ".create-movie"
    }
    var titleInput = document.querySelector(DOMSelectors.movieInputElement);
    var genreSelect = document.querySelector(DOMSelectors.movieSelectELement);
    var lengthInput = document.querySelector(DOMSelectors.lengthInputElement);

    function getInputData() {
        var title = titleInput.value;
        var length = lengthInput.value;
        var genre = genreSelect.options[genreSelect.selectedIndex].value;
        
        return {
            title: title,
            length: length,
            genre: genre
        }
    }
    // var movieList = document.querySelector('.movie-list');
    // var list = document.createElement('ul');
    // movieList.appendChild(list)

    // function showMovieData(movie,data){
    //     var li = document.createElement('li');
    //     li.textContent = data.movieList[movieList.length-1].getData();
    // }

    function showMovieData(movie){
        var movieList = document.querySelector('.movie-list');
        movieList.textContent = movie.getInfo();
    }
     function clearInputs(){
         titleInput.value = "";
         genreSelect.selectedIndex = 0;
         lengthInput.value = "";    
     }
     function displayError(){
         var isValid = titleInput.value && lengthInput.value && genreSelect.selectedIndex
         if (!isValid){
             var movieError = document.querySelector('.movie-error');
             movieError.textContent = "You have to enter all inputs";
            }
           

     }


    return {
        DOMStrings: DOMSelectors,
        getInputData: getInputData,
        showMovieData: showMovieData,
        clearInputs: clearInputs,
        displayError:displayError
    }


}())