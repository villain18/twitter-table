"use strict";
exports.__esModule = true;
exports.sendTweet = void 0;
var twitter_lite_1 = require("twitter-lite");
var twitterApiVersion = "2";
var config = {
    consumer_key: "",
    consumer_secret: "",
    access_token_key: "",
    access_token_secret: ""
};
var client = new twitter_lite_1["default"](config);
var sendTweet = function () {
    client
        .get("account/verify_credentials")
        .then(function (results) {
        console.log("results", results);
    })["catch"](console.error);
};
exports.sendTweet = sendTweet;
console.log((0, exports.sendTweet)());
