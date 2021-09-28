import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
//import twitterUpdate from '../../actions/twitterbackendspark';
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
admin.initializeApp();

export const addFounderEntry = functions.https.onRequest((request, response) => {
    const key = functions.config().founderentry.key;
    const req_key = request.get('auth');
    if (req_key === key) {
        let _title: string = request.body.name;
        functions.logger.info(request.body);
        let _body: string = request.body.body;
        let _toPublish: boolean = request.body.publish;
        functions.logger.info("Read entry for founder table!", { structuredData: true });
        admin.database().ref('/test-twitter-table').push(
            {
                title: _title,
                body: _body,
                publish: _toPublish
            }

        ).then(() => {
            console.log("Saved to db");
            response.send("Ok");
        }).catch((error) => {
            functions.logger.info(error);
            throw new functions.https.HttpsError('unknown', error.message, error);
        })
    }
    else{
        response.status(400).send("Error : Invalid auth code");
    }

});

exports.helloWorld = functions.https.onRequest((_request, response) => {
    functions.logger.info("Hello logs!", { structuredData: true });
    admin.database().ref('/date').push({ date: new Date().toString() });
    response.send(new Date().toString());
});

export const onEntryAdd = functions.database.ref('test-twitter-table/{entry}').onCreate((snap,context) => {
    console.log("Calling twitter function");
    console.log(snap.toJSON());
}); 


