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

const showsEl = document.querySelector('.shows');
const showsTitle = document.createElement("div");
showsTitle.classList.add("shows__title");
showsTitle.innerText="Shows";
showsEl.appendChild(showsTitle);

shows.forEach((show)=>{
    const lable = document.createElement("label");
    lable.classList.add("shows__label-date");
    lable.innerText="DATE";

    const showsDate = document.createElement("p");
    showsDate.classList.add("shows__date");
    showsDate.innerText=show.date;
    
    const venue = document.createElement("label");
    venue.classList.add("shows__lable-venue");
    venue.innerText="VENUE";

    const showsVenue = document.createElement("p");
    showsVenue.classList.add("shows__venue");
    showsVenue.innerText=show.venue;

    const location = document.createElement("label");
    location.classList.add("shows__lable-location");
    location.innerText="LOCATION";
   
    const showsLocation = document.createElement("p");
    showsLocation.classList.add("shows__location");
    showsLocation.innerText=show.location;

    const buyButton = document.createElement("button");
    buyButton.classList.add("shows__button");
    buyButton.textContent='Buy Tickets';

    const hrborder = document.createElement("hr");
    hrborder.classList.add("shows__hrborder");
    

    showsEl.appendChild(lable);
    showsEl.appendChild(showsDate);
    showsEl.appendChild(venue);
    showsEl.appendChild(showsVenue);
    showsEl.appendChild(location);
    showsEl.appendChild(showsLocation);
    showsEl.appendChild(buyButton);
    showsEl.appendChild(hrborder);
    
});





