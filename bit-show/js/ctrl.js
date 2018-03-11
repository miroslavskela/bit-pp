const ctrlModule = ((data, ui) => { 
    const init = () => {
        const {
            baseUrl
        } = data.data // baseurl iz data modula 
        fetchShows(baseUrl)
        registerEventHandlers();
    } // init funkcija koja se poziva na index strani i koja pokrece fetchShows funkciju

    const initSinglePage = () => { //poziva single show
        const {
            baseUrl
        } = data.data
        singleShow(baseUrl + "/" + localStorage.getItem("showId") + "?embed[]=seasons&embed[]=cast")
    } // initSinglePage funkcija koja se pokrece na singlePage strani i pokrece singleShow funkciju

    const registerEventHandlers = () => {
        $(document).on('click', '.show-card', function (event) {
            // event.stopPropagation();
            const showId = $(this).attr("data-show-id");
            localStorage.setItem("showId", showId);
            location.assign('singlePage.html')
        })
    } //funkcija koja klikom na neki show smesta njegov id u local storage i odlazi na singlePage odakle iz localStorage uzima vrednost i poziva jedan show


    const fetchShows = (url) => { 
        $.get(url)
            .done(onSuccessHandler)
            .fail(onErrorHandler)
    } //request koji se salje za landing page
    
    const onSuccessHandler = (response) => {
        // console.log(response)
        const adaptedShows = data.adaptData(response)
        console.log(adaptedShows)
        ui.displayShows(adaptedShows)
    } //funkcija koja prima odgovor i pravi const i na osnovu tog consta poziva funkciju display Shows iz uimodula

    const onErrorHandler = (error) => {
        console.log(error)
        ui.displayError(error)
    } // funkcija greske


    const singleShow = (url) => { //request za single page
        $.get(url)
            .done(onSuccessHandlerSinglePage)
            .fail(onErrorHandler)
    } //request koji se salje za single page

    const onSuccessHandlerSinglePage = (response) => {
        const adaptedShow = data.adaptSingleShow(response)
        const adaptedCast = data.adaptCast(response._embedded.cast)
        const adaptedSeasons = data.adaptSeason(response._embedded.seasons)
        const lengthCast = response._embedded.cast.length
        const lengthSeasons = response._embedded.seasons.length
        


        console.log(response._embedded.cast)
        console.log(adaptedShow)
        
       
        
       
        
        
        ui.displaySingleShow(adaptedShow)
        ui.displayCast(adaptedCast);
        ui.displaySeason(adaptedSeasons);
        ui.$ul.prepend(`<h2>CAST (${adaptedCast.length})</h2>`) // dodavanje broja glumaca na osnovu duzine niza 
        ui.$ul1.prepend(`<h2>SEASONS (${adaptedSeasons.length})</h2>`) // dodavanje broja sezona na osnovu duzine niza
        
    } // funkcija koja prima response i pravi jednu instancu to jest poziva funkcije display singleshow i display cast i season iz ui modula

    return { //expose
        init,
        initSinglePage,    
    }

})(dataModule, uiModule);