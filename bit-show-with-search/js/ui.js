const uiModule = (() => {
    const $container = $('.con1')
    const $cols = $('.cols');
    const $row = $('.row1')
    const $ul = $('.list-group')
    const $ul1 = $('.list1-group')
    const $ul2 = $('.list2-group')
    const $summary = $('.summary')


    const displayShows = (shows) => {
        shows.forEach(show => {
            const $showCard = createShowCard(show);
            $row.append($showCard);
        });
    }

    const displaySingleShow = (show) => {
        const $singleShowCard = createSingleShowCard(show)
        $container.prepend(`<h3 class="center-align">${show.name}</h3>`)
        $row.prepend($singleShowCard)
        $summary.append(show.summary)
    }

    const displayCast = (cast) => {
        cast.map((cast) => {
            const $castCard = createCastList(cast)
            $ul1.append($castCard);
        })
        $ul1.prepend(`<h3>Cast (${cast.length})</h3>`)
    }

    const displaySeason = (season) => {
        season.map((season) => {
            const $seasonCard = createSeasonList(season)
            $ul.append($seasonCard);
        })
        $ul.prepend(`<h3>Seasons</h3>`)
    }
    const displaySearch = (search) => {
        $ul2.empty()
        search.forEach((search) => {
            const $searchCard = createSearchList(search)
            $ul2.append($searchCard)
        })
    }





    const createShowCard = (show) => {
        const { image, name, id } = show

        return $(`
        <div class="col s4 show-card" data-show-id="${id}">
        <div class="card">
          <div class="card-image">
            <img src="${image.medium}">
            </div>
            <span class="card-title">${name}</span>
          
        </div>
      </div>`
        )
    }

    const createSingleShowCard = (show) => {
        const { image, name, id, summary } = show

        return $(` <div class="col s6">
      <div class="card">
        <div class="card-image">
          <img src="${image.medium}">
          </div>
          <span class="card-title">${name}</span>
          
       
        </div>
      </div>
    </div>`)
    }

    const createCastList = (cast) => {
        return $(`
      <li class="list-item">${cast.name}</li>
      `)
    }
    const createSeasonList = (season) => {
        return $(`
        <li class="list-item"><strong>Start Date:</strong> ${season.start} <strong>End Date:</strong> ${season.end}</li>
        `)
    }

    const createSearchList = (search) => {
        return $(` <li class="list-item search">${search.name}</li>`)
    }

    const displayError = (error) => {
        $container.innerHTML = "<h3>Error</h3>"
    }

    return {
        displayShows,
        displayCast,
        displaySeason,
        displaySingleShow,
        displaySearch,
        displayError,
        $ul2
    }
})()