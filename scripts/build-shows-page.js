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
// function adjustWindowSize(){

    

//     const showsEl = document.querySelector('.shows');

//     const showsTitle = document.createElement("div");
//     showsTitle.classList.add("shows__title");
//     showsTitle.innerText="Shows";

//     shows.forEach((show)=>{

//         const div1 = document.createElement("div");
//         div1.classList.add("shows__theader");
//         showsEl.appendChild(div1);

//         const div2 = document.createElement("div");
//         div1.classList.add("shows__theader");
//         showsEl.appendChild(div2);

//         const lable = document.createElement("label");
//         lable.classList.add("shows__label-date");
//         lable.innerText="DATE";

//         const showsDate = document.createElement("p");
//         showsDate.classList.add("shows__date");
//         showsDate.innerText=show.date;
        
//         const venue = document.createElement("label");
//         venue.classList.add("shows__lable-venue");
//         venue.innerText="VENUE";

//         const showsVenue = document.createElement("p");
//         showsVenue.classList.add("shows__venue");
//         showsVenue.innerText=show.venue;

//         const location = document.createElement("label");
//         location.classList.add("shows__lable-location");
//         location.innerText="LOCATION";
    
//         const showsLocation = document.createElement("p");
//         showsLocation.classList.add("shows__location");
//         showsLocation.innerText=show.location;

//         const buyButton = document.createElement("button");
//         buyButton.classList.add("shows__button");
//         buyButton.textContent='Buy Tickets';

//         const hrborder = document.createElement("hr");
//         hrborder.classList.add("shows__hrborder");
        
//         if(window.innerWidth >=1280){
//             showsEl.innerHTML = "";
//             console.log("BEEEEE");
//         }else if(window.innerWidth>=768){
//             showsEl.innerHTML = "";
//             console.log("HHooo");
//             showsEl.appendChild(showsTitle);
//             showsEl.appendChild(div1);
//             div1.appendChild(lable);
//             div1.appendChild(venue);
//             div1.appendChild(location);

//             showsEl.appendChild(div2);
//             div2.appendChild(showsDate);
//             div2.appendChild(showsVenue);
//             div2.appendChild(showsLocation);
//             div2.appendChild(buyButton);

//             showsEl.appendChild(hrborder);

//         }else{

//             console.log("GEEEIIII");
//             showsEl.appendChild(lable);
//             showsEl.appendChild(showsDate);
//             showsEl.appendChild(venue);
//             showsEl.appendChild(showsVenue);
//             showsEl.appendChild(location);
//             showsEl.appendChild(showsLocation);
//             showsEl.appendChild(buyButton);
//             showsEl.appendChild(hrborder);
//         };
        
//     });
// };

// adjustWindowSize();
// window.addEventListener('resize', ()=>{adjustWindowSize()});


function adjustWindowSize() {
    const showsEl = document.querySelector('.shows');
    showsEl.innerHTML = ""; // Clear content before updating

    const showsTitle = document.createElement("div");
    showsTitle.classList.add("shows__title");
    showsTitle.innerText = "Shows";
    showsEl.appendChild(showsTitle);

    if (window.innerWidth >= 1280) {
        console.log("Desktop View");
        // Code for desktop view here
        // For desktop, you might want to keep the layout the same or add additional styles
    } else if (window.innerWidth >= 768) {
        console.log("Tablet View");
        // Create header row for tablet view
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

        // Create content rows for each show
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

        // const hrborder = document.createElement("hr");
        // hrborder.classList.add("shows__hrborder");
        // showsEl.appendChild(hrborder);

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

            // div1.appendChild(lableDate);
            // div1.appendChild(venue);
            // div1.appendChild(location);
            // showsEl.appendChild(div1);

        
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

             // div1.appendChild(lableDate);
            // div1.appendChild(venue);
            // div1.appendChild(location);
            // showsEl.appendChild(div1);
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

        // const hrborder = document.createElement("hr");
        // hrborder.classList.add("shows__hrborder");
        // showsEl.appendChild(hrborder);
    }
}


adjustWindowSize();


window.addEventListener('resize', adjustWindowSize);
