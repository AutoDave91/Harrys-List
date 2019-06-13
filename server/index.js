const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.json())

const {SERVER_PORT, CONNECTION_STRING} = process.env



app.listen(SERVER_PORT, ()=> {
    console.log(`Listening on port ${SERVER_PORT}`)
})