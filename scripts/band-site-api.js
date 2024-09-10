class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseURL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com';
    }

    async getComments(){
        try{
            console.log(this.apiKey);
            console.log(this.baseURL);
            const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
            return response.data;
            
        }catch(error){
            console.log(`GET comments request failed: ${error}`);
        }
    };

    async getShows(){
        try{
            const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`);
            // console.log("im here");
            // console.log(response.data);
            return response.data;
        }catch(error){
            console.log(`GET shows request failed: ${error}`);
        }
    };

    async postComment(newObject){
        if (!newObject.name || !newObject.comment) {
            throw new Error("Both 'name' and 'comment' are required.");
          }
        try{
            const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`,newObject);
            // console.log("hoho");
            // console.log(response.data);
            return response.data;
            
        }catch(error){
            if (error.response && error.response.status === 400) 
                {
                 console.error('Bad Request: Missing required fields.');
                } else {
                 console.log(`POST comments request failed: ${error}`);
                }
        }
    }
};

//********************* */

// const apiKey = "aedc5d1c-c5a5-46ea-acbc-70154d20e5ef";  // Replace with your actual API key
// const bandSiteApi = new BandSiteApi(apiKey);

// // Example usage: Get comments
// bandSiteApi.getComments()
//     .then(comments => {
//         console.log('Comments:', comments);
//     })
//     .catch(error => {
//         console.error('Error fetching comments:', error);
//     });

// // Example usage: Post a new comment
// const newComment = { name: 'geetha', comment: 'Hello' };
// bandSiteApi.postComment(newComment)
//     .then(response => {
//         console.log('Comment posted:', response);
//     })
//     .catch(error => {
//         console.error('Error posting comment:', error);
//     });

// async function main() {
    
//     const apiKey = "aedc5d1c-c5a5-46ea-acbc-70154d20e5ef";
        
//     const bandSiteApi = new BandSiteApi(apiKey);

//     try {       
//         // const comments = await bandSiteApi.getComments();
//         // console.log('Comments:', comments);
        
//         // const newComment = { name: 'John Doe', comment: 'Great show!' };
//         const postResponse = await bandSiteApi.postComment(newComment);
//         console.log('Comment posted:', postResponse);
//         const showsResponse= await bandSiteApi.getShows();
//         console.log('Shows:', showsResponse);
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }

// main();

////////////////////////////////////////
//Q: async function is executing late, so im not fetching the data in index page.
// async function renderReviews(comment){
//     console.log(reviews);
// };

// 

// async function getreviews() {  
//     const apiKey = "aedc5d1c-c5a5-46ea-acbc-70154d20e5ef";
//     const bandSiteApi = new BandSiteApi(apiKey);
//     // function getreviewResponse(){
//         try{
//             reviews = await bandSiteApi.getComments();
//             console.log('Comments here:', reviews);
//             renderReviews(reviews);

//         }catch (error) {
//             console.error('An error occurred in reviews comments:', error);
//         }
//     // }
// }
// getreviews();

// async function postComment(){
//     const apiKey = "aedc5d1c-c5a5-46ea-acbc-70154d20e5ef";
//         const bandSiteApi = new BandSiteApi(apiKey);
//         try{

//         }
// }