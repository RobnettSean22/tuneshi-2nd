require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
// const sessions = require('express-session')
const {readAllUsers, readUser, createUser, deleteUser} = require('./controller/controller');
app.use(express.json());
// const {SESSION_STRING} = process.env
const {CONNECTION_STRING} = process.env;
const port = 5000;

let db;
massive(CONNECTION_STRING).then(dbInstance => {
    console.log('database firing');
    app.set('db', dbInstance);
});


app.get('/api/users', readAllUsers);

app.get('/api/user_profile/:id' , readUser);

app.post('/api/create_profile', createUser);

app.delete('/api/delete_profile/:id', deleteUser);


app.listen({port}, () => console.log(`gotchu on ${port}`));
