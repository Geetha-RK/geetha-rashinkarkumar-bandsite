 
const apiKey = "aedc5d1c-c5a5-46ea-acbc-70154d20e5ef";
const bandSiteApi = new BandSiteApi(apiKey); 
let reviews = [];
const formEl=document.querySelector(".form");    

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
            comment:comment
        };

        async function postreviews() {   
            console.log('Sending array:',window.newArray)
            try{
                const postResponse = await bandSiteApi.postComment(window.newArray);
                console.log('Comment posted:', postResponse);
                display();
            }catch(error){
                console.error('Error posting comment:', error);
            }

        }
        postreviews();
        form.reset();

        display();  
    });

    const displayEl = document.querySelector(".comment");

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
                        const sortedReviews = reviews.sort((a, b) => b.timestamp - a.timestamp); 
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
        
        const likeCount = document.createElement("p");
        likeCount.classList.add("comment__like-count");
        likeCount.textContent = 'Likes : 0'
        main.appendChild(likeCount); 

        const buttons = document.createElement("div");
        buttons.classList.add("comment__buttons");
        main.appendChild(buttons);

        const likeButton = document.createElement('button');
        likeButton.classList.add("comment__like-button");
        likeButton.type="click";
        likeButton.textContent = 'Like';
        buttons.appendChild(likeButton);   

        likeButton.addEventListener("click",()=>{          

            async function postlikes(reviewId) {  
                try{
                    let response = await bandSiteApi.likeComment(reviewId,(review.likes+1));

                    if (response.likes !== undefined) {
                        likeCount.textContent = `Likes: ${response.likes}`;
                    }
                    }catch(error) {
                    console.error('An error comments:', error);
                }
            }
            postlikes(review.id);
        });

        const deleteButton = document.createElement('button');
        deleteButton.classList.add("comment__like-button");
        deleteButton.type="click";
        deleteButton.textContent = 'Delete';
        buttons.appendChild(deleteButton); 

        deleteButton.addEventListener("click",()=>{
            async function deleteComment(reviewId){
                console.log("Record to be deleted:",reviewId);
                try{
                    await bandSiteApi.deleteComment(reviewId);
                    display();
                }catch(error){
                    console.error('An error delete:', error);
                }
            }
            deleteComment(review.id);
        });

        const hrborder = document.createElement("hr");
        hrborder.classList.add("commment__border");
        displayEl.appendChild(hrborder);
    }


   

    