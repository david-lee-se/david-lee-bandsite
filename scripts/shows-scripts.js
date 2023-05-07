const showDates =[
            {   
                date: "Mon Sept 06 2021",
                venue: "Ronald Lane",
                location: "San Francisco, CA"
            },
            {
                date: "Tue Sept 21 2021",
                venue: "Pier 3 East",
                location: "San Francisco, CA"
            },
            {
                date: "Fri Oct 15 2021 ",
                venue: "View Lounge",
                location: "San Francisco, CA"
            },
            {
                date: "Sat Nov 06 2021",
                venue: "Hyatt Agency",
                location: "San Francisco, CA"
            },
            {
                date: "Fri Nov 26 2021",
                venue: "Moscow Center",
                location: "San Francisco, CA"
            },
            {
                date: "Wed Dec 15 2021",
                venue: "Press Club",
                location: "San Francisco, CA"
            }
]

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

function createShowsAll(showsArray) {
    const windowWidth = window.innerWidth;
    if (windowWidth <= 767) {
        showsArray.forEach(createShowMobile);
    }
    else {
        createShowsTablet(showsArray);
    }
}



function createShowsTablet(showsArray) {
    createShowTable();
    createTableRow(showsArray);   
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
    dateEl.innerText = showsArray[i].date;
    
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

createShowsAll(showDates);

const showRow = document.querySelector(".show-dates");
showRow.addEventListener("click", (event) => {
        const allRows = document.querySelectorAll(".show-dates-card__table-row");
        allRows.forEach((element) => {
            element.classList.remove("show-dates-card__table-row--selected");
        })
        event.target.classList.add("show-dates-card__table-row--selected");
})


