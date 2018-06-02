const dataModule = (() => {
    const data = {
        baseUrl: "http://api.tvmaze.com/shows",
    };
class Show {
    constructor(show){
        this.name=show.name
        this.image = show.image
        this.id= show.id
        this.summary= show.summary
    }
}

class Cast {
constructor(cast){
    this.name = cast.person.name
}
}

class Season {
    constructor(season){
        this.start = season.premiereDate
        this.end = season.endDate
    }
}
 class Search {
    constructor(search){
       this.name = search.show.name
       this.id = search.show.id
    }
}

const adaptShows = (shows) => {
    const showArr = shows.map((show) => {
    return new Show (show)
})
return showArr.slice(50,100)
}

const adaptSingleShow = (show) => {
    return new Show(show)
}
const adaptSearch = (searchList) => {
    const searchArr = [];
     searchList.forEach((
         search, index) => {
        if(index < 10){
            
          const searchResult = new Search (search)
        searchArr.push(searchResult)
    }
    })
    return searchArr
    
}

const adaptCast = (cast) => {
    const castArr = [];
    cast.map((cast) => {
     castArr.push(new Cast (cast))
    })
    return castArr
}

const adaptSeason = (season) => {
    const seasonArr = [];
    season.map((season) => {
        seasonArr.push(new Season(season))
    })
    return seasonArr
}


return {
    data,
    adaptShows,
    adaptSingleShow,
    adaptCast,
    adaptSeason,
    adaptSearch,
    
}

})()