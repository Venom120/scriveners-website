/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/


// Select the database to use.
const database = 'scriveners';
const collection = 'poem_points';
use(database);
db.createCollection(collection);

db.poem_points.insertMany([
    {"rank":1,"username":"Niharika Sharma","score":170},
    {"rank":2,"username":"Mahak Garg","score":160},
    {"rank":3,"username":"Vaanya Jain","score":140},
    {"rank":4,"username":"Kanak","score":105},
    {"rank":5,"username":"Simpi Kumari","score":70}
]);