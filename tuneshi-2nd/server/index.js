const express = require('express')
const app = express()
const massive = require('massive')
require('dotenv').config()
app.use(express.json())
const {CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(dbInstance => {
    console.log('database firing')
    app.set('db', dbInstance)
})
const port = 4422;



app.listen({port}, () => console.log(`gotchu on ${port}`))
