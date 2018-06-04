const uiModule = (() => {
    const con1 = document.querySelector('.con1')
    const row1 = document.querySelector('.row1')
    const ul = document.querySelector('.list-group')
    const ul1 = document.querySelector('.list1-group')
    const ul2 = document.querySelector('.list2-group')
    const summary = document.querySelector('.summary')


    const displayShows = (shows) => {
        shows.forEach(show => {
            const showCard = createShowCard(show);
            row1.appendChild(showCard);
        });
    }

    const displaySingleShow = (show) => {
        const singleShowCard = createSingleShowCard(show)

        let showName = document.createElement('h3');
        showNameText = document.createTextNode(show.name);
        showName.appendChild(showNameText);

        con1.insertBefore(showName,row1)
        let ul = document.querySelector('.list-group')
        row1.insertBefore(singleShowCard, ul);

        
      let summaryEl = document.createTextNode(show.summary)
       console.log(summaryEl);
        summary.appendChild(summaryEl)
    }

    const displayCast = (cast) => {
        let h3 = document.createElement('h3');
        let h3Text = document.createTextNode("Cast" + " (" + cast.length + ")");
        h3.appendChild(h3Text);
        ul1.appendChild(h3);

        cast.map((cast) => {
            const castCard = createCastList(cast)
            ul1.appendChild(castCard);
        })
    }

    const displaySeason = (season) => {
        let h3 = document.createElement('h3');
        let h3Text = document.createTextNode("Seasons" + " (" + season.length + ")");
        h3.appendChild(h3Text);
        ul.appendChild(h3);

        season.map((season) => {
            const seasonCard = createSeasonList(season)
            ul.appendChild(seasonCard);
        })
        
    }
    const displaySearch = (search) => {
        ul2.innerHTML = "";

        search.forEach((search) => {
            const searchCard = createSearchList(search)
            ul2.appendChild(searchCard)
        })
    }





    const createShowCard = (show) => {
        const { image, name, id } = show;

        let divFirst = document.createElement('div');
        divFirst.className="col s4 show-card gggggg";
       

        let divSecond = document.createElement('div');
        divSecond.className = "card";

        let divThird = document.createElement('div');
        divThird.className = "card-image";

        let img = document.createElement('img');
        img.className = "show-img"
        img.setAttribute('src', image.medium);
        img.setAttribute('data-show-id', id);
        divThird.appendChild(img);

        let span = document.createElement('span');
        span.className = "card-title";
        span.textContent = name;
      

        divSecond.appendChild(divThird);
        divSecond.appendChild(span);

        divFirst.appendChild(divSecond)

        return divFirst;
    }

    const createSingleShowCard = (show) => {
        const { image, name, id, summary } = show

        let divFirst = document.createElement('div');
        divFirst.className = "col s6";

        let divSecond = document.createElement('div');
        divSecond.className = "card";

        divThird = document.createElement('div');
        divThird.className = "card-image";

        let img = document.createElement('img');
        img.setAttribute('src', image.medium)
        divThird.appendChild(img);

        let span = document.createElement('span');
        span.textContent = name;
        

        divSecond.appendChild(divThird);
        divSecond.appendChild(span);

        divFirst.appendChild(divSecond)
        
        return divFirst
    }

    const createCastList = (cast) => {
        let li = document.createElement('li');
        li.textContent = cast.name;
        return li
    }
    const createSeasonList = (season) => {
        let li = document.createElement('li');
         li.textContent = "Season start: " + season.start + " Season end: " + season.end;
        li.appendChild(liText);
        return li
    }

    const createSearchList = (search) => {
        let li = document.createElement('li');
        li.className = "li-search"
        li.setAttribute('data-show-id', search.id)
        li.textContent = search.name
        return li
    }

    const displayError = (error) => {
       let h3 = document.createElement('h3');
        h3.textContent = "Error";
       con1.appendChild('h3')
    }

    return {
        displayShows,
        displayCast,
        displaySeason,
        displaySingleShow,
        displaySearch,
        displayError,
        ul2
    }
})()