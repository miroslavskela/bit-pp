const ctrlModule = ((module1, module2) => {
const init = () => {
    const {
        baseUrl
    } = module1.data
    fetchShows(baseUrl)
    registerEventHandlers();
    // search()
}

const initSingleShow = () => {
    const {baseUrl}=module1.data
    fetchSingleShow(baseUrl + "/" + localStorage.getItem("showId") + "?embed[]=seasons&embed[]=cast")
    // search()
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

const onSuccessHandler = (response) =>{
   const adaptedShows =  module1.adaptShows(response);
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
    console.log(response);
    const adaptedSearch = module1.adaptSearch(response)
    console.log(adaptedSearch);
    module2.displaySearch(adaptedSearch)
}

const registerEventHandlers = () => {
    $(document).on('click', '.show-card', function (event) {
        // event.stopPropagation();
        const showId = $(this).attr("data-show-id");
        localStorage.setItem("showId", showId);
        location.assign('singlePage.html')
    })
}

const  searchShowTrigger =  (event) => {
    
    let searchVal = searchInput.val();
    
    
    if (searchInput.val().length < 3 || !searchInput.val()) {
        return   module2.$ul2.empty();
    }
   
    
    let requestSearch = $.get(" http://api.tvmaze.com/search/shows?q="+searchVal).done(response => {
        let list = module1.adaptSearch(response);
        module2.displaySearch(list);
        module1.searchArr = []
    })
}

const searchInput = $("#search");
searchInput.on("keyup", searchShowTrigger);
// const search = () => {
    
//     $('#search').keyup(() => {
//         if ($('#search').val().length < 3) {
//             return;
//         } 
// fetchShowsSearch(" http://api.tvmaze.com/search/shows?q="+$("#search").val())
//     })
// } 



return {
    init,
    initSingleShow,
    // search
}

})(dataModule, uiModule)