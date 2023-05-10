const showDates = []
function createShowMobile(arrayObj) {

    parentDiv = document.querySelector(".shows");
    const showSectionHeader = document.createElement("h2");
    showSectionHeader.classList.add("section-header", "section-header__shows-title");
    showSectionHeader.innerText = "Shows";
    
    const showDatesContainer = document.createElement("div");
    showDatesContainer.classList.add("show-dates")
    
    const tableEl = document.createElement("div");
    tableEl.classList.add("show-dates-card__title-container");
    showDatesContainer.append(tableEl);
    parentDiv.append(showSectionHeader, showDatesContainer);
    
    const showCard = document.createElement("div");
    showCard.classList.add("show-dates-card");

    const dateTitle = document.createElement("p");
    dateTitle.classList.add("show-dates-card__title");
    dateTitle.innerText = "DATE";
    
    const showDate = document.createElement("h3");
    showDate.classList.add("show-dates-card__date");
    showDate.innerText = arrayObj.date;

    const venueTitle = document.createElement("p");
    venueTitle.classList.add("show-dates-card__title");
    venueTitle.innerText = "VENUE";

    const showVenue = document.createElement("p");
    showVenue.classList.add("show-dates-card__venue");
    showVenue.innerText = arrayObj.venue;
    
    const locationTitle = document.createElement("p");
    locationTitle.classList.add("show-dates-card__title");
    locationTitle.innerText = "LOCATION";

    const showLocation = document.createElement("p");
    showLocation.classList.add("show-dates-card__location");
    showLocation.innerText = arrayObj.location;

    const buyTicketsButton = document.createElement("button");
    buyTicketsButton.setAttribute("type", "submit");
    buyTicketsButton.innerText = "BUY TICKETS";
    buyTicketsButton.classList.add("show-dates-card__button");

    const divider = document.createElement("hr");
    divider.classList.add("divider");

    showCard.append(dateTitle, showDate, venueTitle, showVenue, locationTitle, showLocation, buyTicketsButton);
    parentDiv.append(showCard, divider);
}

function createShowTable() {

    parentDiv = document.querySelector(".shows");
    const showSectionHeader = document.createElement("h2");
    showSectionHeader.classList.add("section-header", "section-header__shows-title");
    showSectionHeader.innerText = "Shows";
    
    const showDatesContainer = document.createElement("div");
    showDatesContainer.classList.add("show-dates")
    
    const tableEl = document.createElement("div");
    tableEl.classList.add("show-dates-card__title-container");
    
    const titleDate = document.createElement("p");
    titleDate.classList.add("show-dates-card__title");
    titleDate.innerText = "DATE";
    
    const titleVenue = document.createElement("p");
    titleVenue.classList.add("show-dates-card__title");
    titleVenue.innerText = "VENUE";

    const titleLocation = document.createElement("p");
    titleLocation.classList.add("show-dates-card__title");
    titleLocation.innerText = "LOCATION";
    
    tableEl.append(titleDate, titleVenue, titleLocation);
    showDatesContainer.append(tableEl);
    parentDiv.append(showSectionHeader, showDatesContainer);
    
}

function createTableRow(showsArray) {
    for (let i = 0; i <showsArray.length; i++) {

        const showDatesContainer = document.querySelector(".show-dates")
        
        rowEl = document.createElement("div");
        rowEl.classList.add("show-dates-card__table-row");
        
        dateEl = document.createElement("p");
        dateEl.classList.add("show-dates-card__date");
        dateEl.innerText = showsArray[i].date;;
        
        venueEl = document.createElement("p");
        venueEl.classList.add("show-dates-card__venue");
        venueEl.innerText = showsArray[i].venue;
        
        locationEl = document.createElement("p");
        locationEl.classList.add("show-dates-card__location");
        locationEl.innerText = showsArray[i].location;
        
        const buyTicketsButton = document.createElement("button");
        buyTicketsButton.setAttribute("type", "submit");
        buyTicketsButton.innerText = "BUY TICKETS";
        buyTicketsButton.classList.add("show-dates-card__button");
        

        rowEl.append(dateEl, venueEl, locationEl, buyTicketsButton);
        showDatesContainer.append(rowEl);
    }
}

function createShowsTablet(showsArray) {
    createShowTable();
    createTableRow(showsArray);   
}

function createShowsAll(showsArray) {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 767) {
        showsArray.forEach(createShowMobile);
    }
    else {
        createShowsTablet(showsArray);
    }
}

axios.get("https://project-1-api.herokuapp.com/showdates?api_key=$api_key")
    .then((results) => {
        results.data.forEach(shows => {
            const showObj = {date: new Date(shows.date).toDateString(), venue: shows.place, location: shows.location}
            showDates.push(showObj);
            return showDates
        })
        createShowsAll(showDates);
        rowHighlightHandler()
    })



function rowHighlightHandler() { 
        const rowHighlight= document.querySelectorAll(".show-dates-card__table-row");
        const location = document.querySelectorAll(".show-dates-card__location");
        const venue = document.querySelectorAll(".show-dates-card__venue");
        const date = document.querySelectorAll(".show-dates-card__date");
        rowHighlight.forEach((event) => {
            event.addEventListener("click", (e)=> {
                location.forEach((location)=> {location.classList.remove("show-dates-card__table-row--selected")}) 
            })
            event.addEventListener("click", (e)=> {
                date.forEach((date)=> {date.classList.remove("show-dates-card__table-row--selected")})
            })
            event.addEventListener("click", (e)=> {
                venue.forEach((venue)=> {venue.classList.remove("show-dates-card__table-row--selected")})
            })
            event.addEventListener("click", (e)=> {
                rowHighlight.forEach((rowHighlight)=> {rowHighlight.classList.remove("show-dates-card__table-row--selected")}) 
            })
            event.addEventListener("click", (e) => {e.target.classList.add("show-dates-card__table-row--selected");})
        })
}
            

    

   