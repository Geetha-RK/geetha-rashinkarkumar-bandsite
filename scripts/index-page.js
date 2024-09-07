
const formEl=document.querySelector(".form");

const reviews=[
    {
        name:'Victor Pinto',
        comment: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
        date: '11/02/2023',
        picture:null,
    },
    {
        name:'Christina Cabrera',
        comment: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
        date: '10/28/2023',
        picture:null,
    },
    {
        name:'Isaac Tadesse',
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
        date: '10/20/2023',
        picture:"./assets/images/Mohan-muruge.jpg",
    }
];
///form
//div partition  form__partition
//  div avatar  form__avatar 
//  - img form__img
//  div formTable form__table
//
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
    nameLable.classList.add('.form__namelable');
    nameLable.setAttribute("for","form__name-id");
    nameLable.textContent="NAME";
    formTable.appendChild(nameLable);

    const cName=document.createElement("input");
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

    const comment=document.createElement("input");
    comment.type="textarea";
    comment.id="form__comment-id";
    comment.name="formComment";
    comment.placeholder="Add a new comment";
    formTable.appendChild(comment);

    const button=document.createElement('button');
    button.classList.add('form__button');
    button.type="submit";
    button.textContent="COMMENT";
    formTable.appendChild(button);


    const commentSection = document.querySelector(".comment-section");
    // console.log(commentSection);

    formEl.addEventListener("submit",(event)=>{
        event.preventDefault();
        const date = new Date();
        console.log(event);
        
        let form=event.target;
        
        // console.log(form.reviewerName);

        const name=form.reviewerName.value;
        const comment=form.formComment.value;

        // console.log(name,comment);

        function formatDateToMMDDYYYY(date) {
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
            const day = String(date.getDate()).padStart(2, '0');
            const year = date.getFullYear();
            
            return `${month}/${day}/${year}`;
        }

        const newArray={
            name:name,
            comment:comment,
            date:formatDateToMMDDYYYY(date),
            picture:"./assets/images/Mohan-muruge.jpg",
        };
        
        reviews.push(newArray);
        form.reset();

        // console.table(reviews);
        // console.log("checkhere")

        display();  
    });

    const displayEl = document.querySelector(".comment");

    function display(){
        displayEl.innerHTML = "";
        
        const sortedReviews = reviews.sort((a, b) => new Date(b.date) - new Date(a.date));

        sortedReviews.slice(0, 3).forEach((review) => {   
            displayComment(review);
        });
    }

    display();  

    function displayComment(review){

        console.log(review.name);
        console.log(review.date);
        console.log(review.comment);

        const hrborder = document.createElement("hr");
        hrborder.classList.add("commment__border");
        displayEl.appendChild(hrborder);

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
        commentDate.innerText= review.date;
        head.appendChild(commentDate);

        const commentText = document.createElement("p");
        commentText.classList.add("comment__text");
        commentText.innerText = review.comment;
        main.appendChild(commentText);
    }