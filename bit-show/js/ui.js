
const uiModule = (() => { // definisemo jquery objekte
    const $container = $('.container')
    const $cols = $('.cols');
    const $row = $('.row')
    const $ul = $('.list-group')
    const $ul1 = $('.list1-group')
    const $h1 = $('.h1') 

    $container.append($row); // dodajemo klasu row 

    const displayShows = (shows) => {
        shows.forEach(shows => {
            const $showCard = createShowCard(shows);
            $row.append($showCard);    
        });  
    } //funkcija koja prikayuje 50 showova na stranici

    const displaySingleShow = (show) => {
        const $showCard = createSingleShowCard(show); //kreiramo na starnici
        $row.prepend($showCard);
    } //funkcija koja prikazuje jedan show

    const displayCast = (cast) => {        
        cast.forEach(cast => {
            const $li = createCastShowCard(cast);
            $ul.append($li);   
        });    // funkcija kojom prikazujemo uloge 
    }

    const displaySeason = (seasons) => {
        seasons.forEach(seasons => {
        const $li1 = createSeasonShowCard(seasons)
        $ul1.append($li1);
        })  //funkcija kojom prikazujemo sezone
    }

    const createShowCard = (shows) => {
        const {
            image,
            name,
            id
        } = shows  

        return $(`
        <div class="show-card cols col-12 col-md-6 col-lg-4 mb-3" data-show-id="${id}">    
        <div class="card" name="${name} style="width: 18rem;">
        <img class="card-img-top" src="${image}" alt="${name}">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
        </div>
        </div> 
        </div>`)
    } //funkcija kreiranja krticaya svaku instancu


    const createSingleShowCard = (show) => {
        const {
            image,
            name,
            id,
            summary
        } = show
        $h1.append(name)

        return $(`
        <div class="show-card cols col-12 col-sm-12 col-md-4 col-lg-4 mb-3" data-show-id="${id}">    
        <div class="card" name="${name} style="width: 18rem;">
        <img class="card-img-top" src="${image}" alt="${name}">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
          <p class="text-justify">${summary}</p>
        </div>
        </div> 
        </div>`)
    } // funkcija kreiranja kartice za jedan show 

    const createCastShowCard = (cast) => {
        const {
            name
        } = cast
        const $card1 = $('.list-group');

        return $(`
        <li class="list-item">${name}</li>
        `)
    } // funkcija kreiranja ul li za uloge
    const createSeasonShowCard = (seasons) => {
        const {
            startDate,
            endDate
        } = seasons
        const $card2 = $('.card2');
        
        return $(`
        <li class="list-item">Start:${startDate} End:${endDate}</li>
        `) 
    } // funkcija kreiranja ul li ya sezone

    const displayError = (error) => { //greska ako je ima
        $container.innerHTML = "<h3>Error</h3>"
    }

    return { //ekspozujemo funkcije i podatke ul i ul1 da bi se dodalo broj uloga i sezona
        displayShows,
        displayError,
        createShowCard,
        displaySingleShow,
        displayCast,
        displaySeason,
        $ul,
        $ul1
    }

})();





