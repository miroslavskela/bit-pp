const dataModule = (() => { 
    const data = {
        baseUrl: "http://api.tvmaze.com/shows",
    };
    //definisemo base url 

    class Show { //pravimo entitet
        constructor(id, name, image, summary) {
            this.id = id;
            this.name = name;
            this.image = image;
            this.summary = summary;
        }
    } // klasa Show

    class Cast {
        constructor(name) { 
            this.name = name
            
        }
    } //klasa cast

        class Seasons {
            constructor(startDate, endDate) {
                this.startDate = startDate;
                this.endDate = endDate;   
            }
        } //klasa season
        

    const adaptData = (shows) => { 
        console.log(shows);
        const showArray = shows.map((shows) => {
            const {
                id,
                name,
                image
            } = shows;
            return new Show(id, name, image.medium)
        })
        return showArray.slice(0, 50); 
    } // funkcija koja prima argument show to jest response i pravi instancu klase Show i vraca niz instanci ogranicen na 50


    const adaptSingleShow = (show) => { // kreiramo single show
        const {
            id,
            name,
            image,
            summary
        } = show;
        return new Show(id, name, image.medium, summary)
    } //funkcija koja prima argument show to jest response u vidu jednog showa po id broju i pravi instancu klase Show i vraca jednu instancu

    const adaptCast = (cast) => {
        let castList = [];
        cast.forEach((element, i) => {
            castList.push(new Cast(element.person.name));
        })
        return castList;
    } // funkcija koja prima argument cast, odnosno response._embedded.cast i pravi instance klase cast i vraca niz

    const adaptSeason = (seasons) => {
        let seasonList = [];
        seasons.forEach((element) => {
            seasonList.push(new Seasons(element.premiereDate, element.endDate));
        })
        return seasonList;
} //funkcija koja prima argument season, odnosno response._embedded.seasons i pravi instance klase season i vraca niz
    return { //ekspozujemo f-cje
        data,
        adaptData,
        adaptSingleShow,
        adaptCast,
        adaptSeason
    } //funkcije i podaci koji se ekspozuju


})();