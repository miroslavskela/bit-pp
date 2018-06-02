const ctrlModule = ((module1, module2) => {
    const init = () => {
        const {
            baseUrl
        } = module1.data
        displaySpinner()
        fetchShows(baseUrl)
        registerEventHandlers();
        searchEventHandlers();
        initSearch();
        
    }

    const initSingleShow = () => {
        const { baseUrl } = module1.data
        fetchSingleShow(baseUrl + "/" + localStorage.getItem("showId") + "?embed[]=seasons&embed[]=cast")
        console.log("asdasdasd");
    }


    const fetchShows = (url) => {
        $.get(url)
            .done(onSuccessHandler)
            .fail(onErrorHandler)
    }

    const fetchShowsSearch = (url) => {
        $.get(url)
            .done(onSuccessSearch)
            .fail(onErrorHandler)
    }

    const onSuccessHandler = (response) => {
        let mainDiv = document.querySelector('.spinner1');
        mainDiv.innerHTML = "";
        const adaptedShows = module1.adaptShows(response);
        module2.displayShows(adaptedShows)
        console.log("sadasdasdasd");
    }

    const onErrorHandler = (error) => {
        module2.displayError(error)
    }

    const fetchSingleShow = (url) => {
        $.get(url)
            .done(onsuccessSingleShowHandler)
            .fail(onErrorHandler)
    }
    const onsuccessSingleShowHandler = (response) => {

        const adaptedSingleShow = module1.adaptSingleShow(response)
        const adaptedCast = module1.adaptCast(response._embedded.cast)
        const adaptedSeasons = module1.adaptSeason(response._embedded.seasons)

        module2.displaySingleShow(adaptedSingleShow)
        module2.displayCast(adaptedCast)
        module2.displaySeason(adaptedSeasons)

    }
    const onSuccessSearch = (response) => {
        const adaptedSearch = module1.adaptSearch(response)

        module2.displaySearch(adaptedSearch)
    }

   

    const registerEventHandlers = () => {
        document.addEventListener('click', function (event) {
            if(event.target.className == 'show-img'){
                console.log("object");
                event.stopPropagation();
                let target = event.target;
                let showId = target.getAttribute('data-show-id')
                localStorage.setItem("showId", showId);
                location.assign('singlePage.html')
            }
        })
    }

    const searchEventHandlers = () => {
        document.addEventListener('click', function (event) {
            if(event.target.className == 'li-search'){
                console.log("object");
                event.stopPropagation();
                let target = event.target;
                let showId = target.getAttribute('data-show-id')
                localStorage.setItem("showId", showId);
                location.assign('singlePage.html')
            }
        })
    }

    // const  searchShowTrigger =  (event) => {

    //     let searchVal = searchInput.val();


    //     if (searchInput.val().length < 3 || !searchInput.val()) {
    //         return   module2.$ul2.empty();
    //     }


    //     let requestSearch = $.get(" http://api.tvmaze.com/search/shows?q="+searchVal).done(response => {
    //         let list = module1.adaptSearch(response);
    //         module2.displaySearch(list);
    //         module1.searchArr = []
    //     })
    // }

    const initSearch = () => {
    const searchInput = document.querySelector("#search");

    searchInput.addEventListener('keyup', function(){
        search()
    });
    
    const search = () => {
        
            if (searchInput.value.length < 3 || !searchInput.value) {
                return module2.ul2.innerHTML = "";
            }
            fetchShowsSearch(" http://api.tvmaze.com/search/shows?q=" + searchInput.value.trim())
        }

    }

    const displaySpinner = () => {
        let spinnerDiv = document.createElement('div')
        spinnerDiv.className = 'spinner';
        let mainDiv = document.querySelector('.spinner1')
        mainDiv.appendChild(spinnerDiv)
    }
    

    return {
        init,
        initSingleShow,
    }

})(dataModule, uiModule)