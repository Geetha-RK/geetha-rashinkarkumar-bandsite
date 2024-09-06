
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

    const nameLable=document.createElement("lable");
    nameLable.classList.add('.form__namelable');
    nameLable.setAttribute("for","form__name-id");
    nameLable.textContent="NAME";
    formEl.appendChild(nameLable);

    const cName=document.createElement("input");
    cName.type="text";
    cName.id="form__name-id";
    cName.name="reviewerName";
    cName.placeholder="Enter your name";
    formEl.appendChild(cName);    

    const commentLable=document.createElement("lable");
    commentLable.classList.add('.form__commentLable');
    commentLable.setAttribute("for","form__comment-id");
    commentLable.textContent="COMMENT";
    formEl.appendChild(commentLable);

    const comment=document.createElement("input");
    comment.type="textarea";
    comment.id="form__comment-id";
    comment.name="formComment";
    comment.placeholder="Add a new comment";
    formEl.appendChild(comment);

    const button=document.createElement('button');
    button.classList.add('.form__button');
    button.type="submit";
    button.textContent="COMMENT";
    formEl.appendChild(button);


    const commentSection = document.querySelector(".comment-section");
    console.log(commentSection);

    formEl.addEventListener("submit",(event)=>{
        event.preventDefault();
        console.log(event);
        
        let form=event.target;
        
        console.log(form.reviewerName);

        const name=form.reviewerName.value;
        const comment=form.formComment.value;

        console.log(name,comment);

        const newArray=[{
            name:name,
            comment:comment,
            date:new Date(),
            picture:"./assets/images/Mohan-muruge.jpg",
        }];

        console.log(newArray.picture);
//Check here//
        console.table(newArray);
        reviews.push(newArray);
        console.table(reviews);
    })

    function display(){
        reviews.toReversed().forEach((review) => {
            displayComment(review);
        });
    }

    function displayComment(review){
        
    }