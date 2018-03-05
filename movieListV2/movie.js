var movieData = (function () {
    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }
    var listOfMovies = [];

    function addMovie (title,length,genre){
        var movie = new Movie(title,length,genre);
        listOfMovies.push(movie);
    }

    return {
        addMovie:addMovie,
        listOfMovies: listOfMovies,
    }
})();

var uiFormData = (function () {
    var domQueries = {
        button: ".create-movie",
        inputTitle: ".movie-title",
        inputLength: ".movie-length",
        inputGenre: ".genre-select"
    }
    var movieValues = {
        title: document.querySelector(".movie-title").value,
        length: document.querySelector(".movie-length").value,
        genre: document.querySelector(".genre-select").value
    }

    var selectElement = function (element) {
        var node = document.querySelector(element);
        // node.classList
        return node;
    }

    return {
        domQueries: domQueries,
        selectElement: selectElement,
        movieValues: movieValues,
    };
})();

var controller = (function (ui, data) {
    var button = uiFormData.selectElement(uiFormData.domQueries.button);
    var title = uiFormData.selectElement(uiFormData.domQueries.inputTitle);
    var length = uiFormData.selectElement(uiFormData.domQueries.inputLength);
    var genre = uiFormData.selectElement(uiFormData.domQueries.inputGenre);



    button.addEventListener("click", createMovie);

    function createMovie() {
        movieData.addMovie(uiFormData.movieValues.title,uiFormData.movieValues.length,uiFormData.movieValues.genre)
    }

})(uiFormData, movieData);