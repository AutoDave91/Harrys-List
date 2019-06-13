const express = require('express');
const app = express();
const session = require('express-session');
const massive = require('massive');
require('dotenv').config();

const ac = require('./conrtollers/authController')
const pc = require('./conrtollers/postController')

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env

app.use(express.json())
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*7
    }}))
massive(CONNECTION_STRING)
    .then(db =>{
        console.log('Database connection successful!')
        app.set('db', db)
    })
    .catch(()=>{console.log('Database connection failed...')})

// endpoints
app.post('/api/register', ac.register)
app.post('/api/login', ac.login)
app.post('/api/logout', ac.logout)

 
 // /api/crap
 let path = '/api'
 app.post(path, pc.createOne)
 app.get(path, pc.getAll)
 app.put(`${path}/:id`, pc.updateOne)
 app.delete(`${path}/:id`, pc.deleteOne)

app.listen(SERVER_PORT, ()=> {
    console.log(`Listening on port ${SERVER_PORT}.`)
})