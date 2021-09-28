export const dependencies = {
    "twitter-lite": "^1.1.0"
};
const twitter = require('twitter-lite');
// Assuming that getSecret is present in utils and twitter secrets are stored in google secret manager
const { getSecret } = require("../utils");

const twitterApiVersion = "2";

const twitterUpdate = async (data) => {

   
    const { key, secret,token_key,token_secret } = await getSecret("twitter");

    const client = new twitter({
        version: twitterApiVersion,
        extension: false, 
        consumer_key: "",
        consumer_secret: "",
        access_token_key: "",
        access_token_secret: ""}

    );

    const { title } = data;

    client.post('statuses/update', { status: title }).then(result => {
        console.log('You successfully tweeted this : "' + result.text + '"');
      }).catch(console.error);
    return true;

};

export default twitterUpdate;