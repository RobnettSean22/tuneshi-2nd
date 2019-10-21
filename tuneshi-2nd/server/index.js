const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config();
const {readAllUsers} = require('./controller/controller');
app.use(express.json());
const {CONNECTION_STRING} = process.env;

let db;
massive(CONNECTION_STRING).then(dbInstance => {
    console.log('database firing');
    app.set('db', dbInstance);
});
const port = 5000;

app.get('/api/people', readAllUsers);



app.listen({port}, () => console.log(`gotchu on ${port}`));
