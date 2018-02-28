var movieArr = [];

function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;

}

Movie.prototype.getData = function () {
    return this.title + ", " + this.genre + ", " + this.length;

}



// document.querySelector("#createMovie").addEventListener("click", createMovie) moze i ovako!!!!

document.querySelector("#createMovie").addEventListener("click", function () {
    createMovie()
})

function createMovie() {
    var movie = document.querySelector("#movie-title").value;
    var length = document.querySelector("#movie-length").value;
    var select = document.querySelector("#movie-genre");
    var genre = select.options[select.selectedIndex].text;
    var movie1 = new Movie(movie, genre, length);
    movieArr.push(movie1);
    makeList(movieArr);
    console.log(movieArr);

    // document.querySelector(".output").innerHTML = makeList(movieArr, document.querySelector(".output"));    
}

var div = document.querySelector('.output');
var list = document.createElement('ul');
div.appendChild(list)

function makeList(Arr) {
    var li = document.createElement('li');
    li.textContent = Arr[Arr.length - 1].getData();
    list.appendChild(li);
}