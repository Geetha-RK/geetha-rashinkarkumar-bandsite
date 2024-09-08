const shows=[
    {
        date:'Mon Sept 09 2024',
        venue:'Ronald Lane',
        location:'San Francisco, CA'
    },
    {
        date:'Tue Sept 17 2024',
        venue:'Pier 3 East',
        location:'San Francisco, CA'
    },
    {
        date:'Sat Oct 12 2024',
        venue:'View Lounge ',
        location:'San Francisco, CA'
    },
    {
        date:'Sat Nov 16 2024',
        venue:'Hyatt Agency ',
        location:'San Francisco, CA'   
    },
    {
        date:'Fri Nov 29 2024',
        venue:'Moscow Center',
        location:'San Francisco, CA'
    },
    {
        date:'Wed Dec 18 2024',
        venue:'Press Club ',
        location:'San Francisco, CA'
    }
];

function adjustWindowSize() {
    const showsEl = document.querySelector('.shows');
    showsEl.innerHTML = ""; 

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
            showsDate.innerText = show.date;

            const showsVenue = document.createElement("p");
            showsVenue.classList.add("shows__venue");
            showsVenue.innerText = show.venue;

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
            showsDate.innerText = show.date;

            const showsVenue = document.createElement("p");
            showsVenue.classList.add("shows__venue");
            showsVenue.innerText = show.venue;

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
            showsDate.innerText = show.date;

            const showsVenue = document.createElement("p");
            showsVenue.classList.add("shows__venue");
            showsVenue.innerText = show.venue;

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

            // showsEl.appendChild(lableDate);
            // showsEl.appendChild(showsDate);
            // showsEl.appendChild(venue);
            // showsEl.appendChild(showsVenue);
            // showsEl.appendChild(location);
            // showsEl.appendChild(showsLocation);
            // showsEl.appendChild(buyButton);
            // showsEl.appendChild(hrborder);
        });
    }
}


adjustWindowSize();


window.addEventListener('resize', adjustWindowSize);
