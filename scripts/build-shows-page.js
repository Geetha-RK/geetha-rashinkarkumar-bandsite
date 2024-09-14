
let shows=[];
const apiKey = "aedc5d1c-c5a5-46ea-acbc-70154d20e5ef";
const bandSiteApi = new BandSiteApi(apiKey); 

async function getShowsData(){
    try{
        const showsResponse = await bandSiteApi.getShows();
        console.log('showsPromise:',showsResponse);
        adjustWindowSize(showsResponse);
        window.addEventListener('resize', ()=>{adjustWindowSize(showsResponse)});
    }catch(error){
        console.log('Error in shows get function',error);
    }
}
getShowsData();
function adjustWindowSize(shows) {
    const showsEl = document.querySelector('.shows');
    showsEl.innerHTML = ""; 

    function convertTimestampToDateString(timestamp) {
        const date = new Date(timestamp);

        const weekdayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    
        const weekday = weekdayNames[date.getDay()];
        const month = monthNames[date.getMonth()];
        const day = date.getDate().toString().padStart(2, '0'); 
        const year = date.getFullYear();
    
        return `${weekday} ${month} ${day} ${year}`;
    }

    const showsTitle = document.createElement("div");
    showsTitle.classList.add("shows__title");
    showsTitle.innerText = "Shows";
    showsEl.appendChild(showsTitle);

    if (window.innerWidth >= 1280) {
        console.log("Desktop View");
        const divMain = document.createElement("div");
        divMain.classList.add("shows__divmain");
        showsEl.appendChild(divMain);

        const div1 = document.createElement("div");
        div1.classList.add("shows__theader");

        const lableDate = document.createElement("label");
        lableDate.classList.add("shows__label-date");
        lableDate.innerText = "DATE";

        const venue = document.createElement("label");
        venue.classList.add("shows__lable-venue");
        venue.innerText = "VENUE";

        const location = document.createElement("label");
        location.classList.add("shows__lable-location");
        location.innerText = "LOCATION";

        div1.appendChild(lableDate);
        div1.appendChild(venue);
        div1.appendChild(location);
        divMain.appendChild(div1);

        shows.forEach(show => {
            const div2 = document.createElement("div");
            div2.classList.add("shows__content");

            const showsDate = document.createElement("p");
            showsDate.classList.add("shows__date");
            showsDate.innerText = convertTimestampToDateString(show.date);

            const showsVenue = document.createElement("p");
            showsVenue.classList.add("shows__venue");
            showsVenue.innerText = show.place;

            const showsLocation = document.createElement("p");
            showsLocation.classList.add("shows__location");
            showsLocation.innerText = show.location;

            const buyButton = document.createElement("button");
            buyButton.classList.add("shows__button");
            buyButton.textContent = 'Buy Tickets';

            const hrborder = document.createElement("hr");
            hrborder.classList.add("shows__hrborder");

            div2.appendChild(showsDate);
            div2.appendChild(showsVenue);
            div2.appendChild(showsLocation);
            div2.appendChild(buyButton);
            
            divMain.appendChild(div2);
            divMain.appendChild(hrborder);
        });        
    } else if (window.innerWidth >= 768) {
        console.log("Tablet View");
        const div1 = document.createElement("div");
        div1.classList.add("shows__theader");

        const lableDate = document.createElement("label");
        lableDate.classList.add("shows__label-date");
        lableDate.innerText = "DATE";

        const venue = document.createElement("label");
        venue.classList.add("shows__lable-venue");
        venue.innerText = "VENUE";

        const location = document.createElement("label");
        location.classList.add("shows__lable-location");
        location.innerText = "LOCATION";

        div1.appendChild(lableDate);
        div1.appendChild(venue);
        div1.appendChild(location);
        showsEl.appendChild(div1);

        shows.forEach(show => {
            const div2 = document.createElement("div");
            div2.classList.add("shows__content");

            const showsDate = document.createElement("p");
            showsDate.classList.add("shows__date");
            showsDate.innerText = convertTimestampToDateString(show.date);

            const showsVenue = document.createElement("p");
            showsVenue.classList.add("shows__venue");
            showsVenue.innerText = show.place;

            const showsLocation = document.createElement("p");
            showsLocation.classList.add("shows__location");
            showsLocation.innerText = show.location;

            const buyButton = document.createElement("button");
            buyButton.classList.add("shows__button");
            buyButton.textContent = 'Buy Tickets';

            const hrborder = document.createElement("hr");
            hrborder.classList.add("shows__hrborder");

            div2.appendChild(showsDate);
            div2.appendChild(showsVenue);
            div2.appendChild(showsLocation);
            div2.appendChild(buyButton);
            
            showsEl.appendChild(div2);
            showsEl.appendChild(hrborder);
        });
    } else {
        console.log("Mobile View");
        shows.forEach(show => {
            const div1 = document.createElement("div");
            div1.classList.add("shows__theader");

            const lableDate = document.createElement("label");
            lableDate.classList.add("shows__label-date");
            lableDate.innerText = "DATE";

            const venue = document.createElement("label");
            venue.classList.add("shows__lable-venue");
            venue.innerText = "VENUE";

            const location = document.createElement("label");
            location.classList.add("shows__lable-location");
            location.innerText = "LOCATION";
        
            const div = document.createElement("div");
            div.classList.add("shows__content");

            const showsDate = document.createElement("p");
            showsDate.classList.add("shows__date");
            showsDate.innerText = convertTimestampToDateString(show.date);

            const showsVenue = document.createElement("p");
            showsVenue.classList.add("shows__venue");
            showsVenue.innerText = show.place;

            const showsLocation = document.createElement("p");
            showsLocation.classList.add("shows__location");
            showsLocation.innerText = show.location;

            const buyButton = document.createElement("button");
            buyButton.classList.add("shows__button");
            buyButton.textContent = 'Buy Tickets';

            const hrborder = document.createElement("hr");
            hrborder.classList.add("shows__hrborder");

            div.appendChild(lableDate);
            div.appendChild(showsDate);
            div.appendChild(venue);
            div.appendChild(showsVenue);
            div.appendChild(location);
            div.appendChild(showsLocation);
            div.appendChild(buyButton);
            showsEl.appendChild(div);
            showsEl.appendChild(hrborder);

        });
    }
}



