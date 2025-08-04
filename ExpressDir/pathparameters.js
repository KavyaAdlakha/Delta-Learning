import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req,res) => {
    res.send("you send a request to root")
})

app.get('/:username/:id', (req,res) => {
    let  {username,id} = req.params
    let  htmlStr = `<h1>welcome  to the page @ ${username}</h1>`
    res.send(htmlStr)
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})