import express from 'express'

const app = express(),
port = 3010,
server = app.listen(3010,()=>{console.log("yay party over at ", port )})

app.use(express.static('public'))