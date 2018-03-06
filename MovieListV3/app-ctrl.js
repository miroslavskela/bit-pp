var ctrlModule = (function(ui, data){
    var createMovie = document.querySelector(ui.DOMStrings.addMovieButton)
    createMovie.addEventListener('click', function(){


    var movieData = ui.getInputData();
    var movie = data.addMovie(movieData);

   
    if(ui.displayError()){
        
        console.log("true");
        ui.showMovieData(movie);
        ui.clearInputs();
        
    }else{
        ui.displayError()
    }
    
    
    


    })


})(uiModule, dataModule);