import express from 'express';

const app = express();
const port = 3000;

// app.use((req,res) => {
//     res.send({
//         fruit: "apple",
//         color: "red"
//     })
// })

app.get("/",(req,res) =>{
    res.send("you are contacted root path")
})

app.get("/about",(req,res) =>{
    res.send("you contacted about path")
})

app.get("/search",(req,res) =>{
    res.send("you contacted search path")
})

// app.get("*",(req,res) => {
//     res.send("this path does not exist")
// })

app.post('/', (req,res) => {
    res.send("you send a post request to root")
})

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`)
})