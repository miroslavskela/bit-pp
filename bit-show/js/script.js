const dataModule = (() => {    //definisemo base url i expose
    const data = {
        baseUrl: "http://api.tvmaze.com/shows",
    };
    class Show {    //pravimo entitet
        constructor(id, name, image) {
            this.id = id;
            this.name = name;
            this.image = image;
        }
        getData() {
            return `${this.title}`;
        }

    }
    
    const adaptData = (shows) => {        //f-ja instancu klase show i vraca show array
        console.log(shows);
        
        const showArray = shows.map((shows) => {
            const {
                id,
                name,
                image     
            } = shows;
            return new Show(id, name, image.medium)
        })

        return showArray.slice(0, 50);  // kratimo na 50 instanci
    }
    const adaptSingleShow = (show) => {  // kreiramo single show
        const {
            id,
            name,
            image
        } = show;

        return new Show(id, name, image.medium)
    }

    return {     //ekspozujemo f-cje
        data,
        adaptData,
        adaptSingleShow
    }







})();




const uiModule = (() => {                             // definisemo jquery objekte
    const $container = $('.container')
    const $cols = $('.cols');
    const $row = $('.row')
    $container.append($row);

    const displayShows = (shows) => {
        shows.forEach(shows => {
            const $showCard = createShowCard(shows);
            $row.append($showCard);


        });
    }

    const displaySingleShow = (show) => {
        const $showCard = createShowCard(show);    //kreiramo na starnici
        $row.append($showCard);
    }

    const createShowCard = (shows) => {
        const {
            image,
            name,
            id
        } = shows
        const $card = $('.card');


        return $(`
        <div class="show-card cols col-12 col-md-6 col-lg-4 mb-3" data-show-id="${id}">    
        <div class="card" name="${name} style="width: 18rem;">
        <img class="card-img-top" src="${image}" alt="${name}">
        <div class="card-body">
          <h5 class="card-title">${name}</h5>
        </div>
        </div> 
        </div>`)
    }

    const displayError = (error) => {                     //greska ako je ima
        $container.innerHTML = "<h3>Error</h3>"
    }


    return {                            //ekspozujemo funkcije
        displayShows,
        displayError,
        createShowCard,
        displaySingleShow

    }

})();





const ctrlModule = ((data, ui) => {               //init poziva fetch shows i eventhandlers
    const init = () => {
        const {
            baseUrl
        } = data.data
        fetchShows(baseUrl)

        registerEventHandlers();
    }

    const initSinglePage = () => {                     //poziva single show
        
        const {
            baseUrl
        } = data.data

        singleShow(baseUrl +"/"+ localStorage.getItem("showId"))
    }

    const registerEventHandlers = () => {                                   //event handler na klik na kard da formira local storage vrednosti
        $(document).on('click', '.show-card', function (event) {
            // event.stopPropagation();
            const showId = $(this).attr("data-show-id");
            localStorage.setItem("showId", showId);
            location.assign('singlePage.html')
            // card.forEach(function(card){
            //     localStorage.setItem(JSON.stringify(card.getAttribute("name")), JSON.stringify(card.getAttribute("data-showid"))) ;
            //     console.log(card);
            // })





        })
    }

    const fetchShows = (url) => {                //request za landing page
        $.get(url)
            .done(onSuccessHandler)
            .fail(onErrorHandler)
    }

    // Our handlers for shows
    const onSuccessHandler = (response) => {         
        // console.log(response)

        const adaptedShows = data.adaptData(response)
        console.log(adaptedShows)

        ui.displayShows(adaptedShows)
    }

    const onErrorHandler = (error) => {
        console.log(error)
        ui.displayError(error)
    }


    const singleShow = (url) => {      //request za single page
        $.get(url)
            .done(onSuccessHandlerSinglePage)
            .fail(onErrorHandler)
    }

    const onSuccessHandlerSinglePage = (response) => {
        // console.log(response)

        const adaptedShow = data.adaptSingleShow(response)
        console.log(adaptedShow)

        ui.displaySingleShow(adaptedShow)
    }

    return {           //expose
        init,
        initSinglePage
    }
})(dataModule, uiModule);