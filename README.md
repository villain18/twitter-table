# twitter-table
Tweet by making entries in a firestore table

Twitter-table

Objective :

To tweet by making entries in google firestore table, enabling track of records along with exposure on twitter.
 
Technical Approach :

Create a firebase table with a schema of 
	{
      id : auto, 
	  title : string,
      body : string ,
      publish : boolean
     }

Whenever an entry is added to twitter table with publish option as true. The body of the entry will be tweeted.

Twitter post api will be called by passing in all the authorization parameters.
https://www.npmjs.com/package/twitter-lite for more details.

More details to come...
