

const formEl=document.querySelector(".form");   
const apiKey = "aedc5d1c-c5a5-46ea-acbc-70154d20e5ef";
const bandSiteApi = new BandSiteApi(apiKey); 
let reviews = [];

// let reviews = [];
// async function getreviews() {  
//     const apiKey = "aedc5d1c-c5a5-46ea-acbc-70154d20e5ef";
//     const bandSiteApi = new BandSiteApi(apiKey);
//     try{
//         reviews = await bandSiteApi.getComments();
//         console.log('Comments here:', reviews);
//     }catch (error) {
//         console.error('An error occurred in reviews comments:', error);
//     }
// }





// const reviews=[
//     {
//         name:'Victor Pinto',
//         comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
//         date: '11/02/2023',
//         picture:null,
//     },
//     {
//         name:'Christina Cabrera',
//         comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
//         date: '10/28/2023',
//         picture:null,
//     },
//     {
//         name:'Isaac Tadesse',
//         comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
//         date: '10/20/2023',
//         picture:"./assets/images/Mohan-muruge.jpg",
//     }
// ];

    const partition = document.createElement("div");
    partition.classList.add("form__partition");
    formEl.appendChild(partition);

    const formAvatar = document.createElement("div");
    formAvatar.classList.add("form__avatar");
    partition.appendChild(formAvatar);

    const formImg = document.createElement("img");
    formImg.classList.add("form__img");
    const imageUrl = "./assets/images/Mohan-muruge.jpg";

    if(imageUrl){
        formImg.src=imageUrl;          

    }else{
        img.style.display='none';

    }

    formImg.alt="avatar image";
    formAvatar.appendChild(formImg); 

    const formTable = document.createElement("div");
    formTable.classList.add("form__table");
    partition.appendChild(formTable);

    const nameLable=document.createElement("lable");
    nameLable.classList.add('form__namelable');
    nameLable.setAttribute("for","form__name-id");
    nameLable.textContent="NAME";
    formTable.appendChild(nameLable);

    const cName=document.createElement("input");
    cName.classList.add("form__name")
    cName.type="text";
    cName.id="form__name-id";
    cName.name="reviewerName";
    cName.placeholder="Enter your name";
    formTable.appendChild(cName);    

    const commentLable=document.createElement("lable");
    commentLable.classList.add('form__commentLable');
    commentLable.setAttribute("for","form__comment-id");
    commentLable.textContent="COMMENT";
    formTable.appendChild(commentLable);

  

     const comment=document.createElement("textarea");
    comment.classList.add("form__comment")
    comment.type="text";
    comment.id="form__comment-id";
    comment.name="formComment";
    comment.placeholder="Add a new comment";
    formTable.appendChild(comment);

    const button=document.createElement('button');
    button.classList.add('form__button');
    button.type="submit";
    button.textContent="COMMENT";
    formTable.appendChild(button);

    const hrborder = document.createElement("hr");
    hrborder.classList.add("form__border");
    formEl.appendChild(hrborder);

    const commentSection = document.querySelector(".comment-section");

    formEl.addEventListener("submit",async (event)=>{
        event.preventDefault();
        
        const date = new Date();
        console.log(event);
        
        let form=event.target;

        const name=form.reviewerName.value;
        const comment=form.formComment.value;

        

        window.newArray={
            name:name,
            comment:comment,
            date:formatDateToMMDDYYYY(date),
            picture:"./assets/images/Mohan-muruge.jpg",
        };
        
        
        reviews.push(newArray);
        console.table(reviews);        //----------------------->
        form.reset();

        display();  
    });
    console.table(reviews);    //------------------>
    const displayEl = document.querySelector(".comment");

    // function formatDateToMMDDYYYY(date) {
    //     const month = String(date.getMonth() + 1).padStart(2, '0'); 
    //     const day = String(date.getDate()).padStart(2, '0');
    //     const year = date.getFullYear();
        
    //     return `${month}/${day}/${year}`;
    // }
    function formatDateToMMDDYYYY(input) {
       
        const date = (input instanceof Date) ? input : new Date(input);
    
        if (isNaN(date.getTime())) {
            throw new Error('Invalid date');
        }
    
        const month = String(date.getMonth() + 1).padStart(2, '0'); 
        const day = String(date.getDate()).padStart(2, '0');
        const year = date.getFullYear();
        
        return `${month}/${day}/${year}`;
    }

    function display(){
        displayEl.innerHTML = "";

            async function getreviews() {  
                try{
                    reviews = await bandSiteApi.getComments();
                    console.log('Comments here:', reviews);
                    console.table(reviews); //--------------------->
                    // const sortedReviews = reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
                        const sortedReviews = reviews.sort((a, b) => b.timestamp - a.timestamp);
                    // sortedReviews.slice(0, 3).forEach((review) => {  
                        sortedReviews.forEach((review) => {   
                        displayComment(review);
                    });

                }catch (error) {
                    console.error('An error occurred in reviews comments:', error);
                }
            }
            getreviews();        
    }

    display();  

    function displayComment(review){

        const align = document.createElement("div");
        align.classList.add("comment__align");
        displayEl.appendChild(align);

        const avatar = document.createElement("div");
        avatar.classList.add("comment__avatar");
        align.appendChild(avatar);

        const img = document.createElement("img");
        img.classList.add("comment__img");
        const imageUrl = review.picture;
        if(imageUrl){
            img.src=imageUrl;          

        }else{
             img.style.display='none';

        }

        img.alt="avatar image";
        avatar.appendChild(img); 
       
        const main = document.createElement("div");
        main.classList.add("comment__main");
        align.appendChild(main);

        const head = document.createElement("div");
        head.classList.add("comment__head");
        main.appendChild(head);

        const commentName = document.createElement("p");
        commentName.classList.add("comment__name");
        commentName.innerText = review.name;
        head.appendChild(commentName);

        const commentDate = document.createElement("p");
        commentDate.classList.add("comment__date");
        commentDate.innerText= formatDateToMMDDYYYY(review.timestamp);
        head.appendChild(commentDate);

        const commentText = document.createElement("p");
        commentText.classList.add("comment__text");
        commentText.innerText = review.comment;
        main.appendChild(commentText);

        const hrborder = document.createElement("hr");
        hrborder.classList.add("commment__border");
        displayEl.appendChild(hrborder);

    }