import Twitter, { TwitterOptions } from 'twitter-lite'


const twitterApiVersion = "2";

const config : TwitterOptions= {
    consumer_key: "",
    consumer_secret: "",
    access_token_key: "",
    access_token_secret: ""}
;

const client = new Twitter(config);

export const sendTweet = function(){
    
    client
  .get("account/verify_credentials")
  .then(results => {
    console.log("results", results);
  })
  .catch(console.error);

};

console.log(sendTweet());

