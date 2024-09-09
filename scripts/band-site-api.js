class BandSiteApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseURL = 'https://unit-2-project-api-25c1595833b2.herokuapp.com/';
    //   this.client = axios.create({
    //     baseURL: this.baseURL,
    //     // timeout: 1000, // Set a timeout (in milliseconds) for requests
    //     headers: {
    //       'Content-Type': 'application/json' 
    //     //   'Authorization': `Bearer ${this.apiKey}` // Include the API key in the Authorization header
    //     }
    //   });
    }

    async getComments(){
        try{
            const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`);
            return response.data;
        }catch(error){
            console.log(`GET comments request failed: ${error}`);
        }
    };

    // async getShows(){
    //     try{
    //         const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`);
    //         return response.data;
    //     }catch(error){
    //         console.log(`GET comments request failed: ${error}`);
    //     }
    // };

    async postComment(newArray){
        if (!newArray.name || !newArray.comment) {
            throw new Error("Both 'name' and 'comment' are required.");
          }
        try{
            const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`,newArray);
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

