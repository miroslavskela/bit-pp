var ctrlModule = (function(ui, data){
    var createMovie = document.querySelector(ui.DOMStrings.addMovieButton)
    createMovie.addEventListener('click', function(){


    var movieData = ui.getInputData();
    var movie = data.addMovie(movieData);
    console.log(movie);
   
    if(!ui.displayError()){
        
        ui.showMovieData(movie);
        ui.clearInputs();
    }
    


    })


})(uiModule, dataModule);