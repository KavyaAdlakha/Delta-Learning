const express = require("express");
const app = express();

// app.use((req,res, next) => {
//     console.log("hi i am a middleware");
//     next();
// });

// app.use((req,res, next) => {
//     console.log("hi i am 2nd middleware");
//     next();
// })

//logger
// app.use((req,res,next) => {
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method, req.hostname, req.path, req.time)
//     next()
// })

const checkToken =  (req,res,next) => {
    let {token} = req.query;
    if(token === "giveaccess"){
        next();
    }
    // res.send("acess denied!")
    throw new Error("ACCESS DENIED!")
}

app.get("/api", checkToken, (req,res) => {
    res.send("data");
})

app.get("/", (req,res) => {
    res.send("hi i am root")
})

app.get("/random", (req,res) => {
    res.status(404).send("this is ranndom page")
});

//404 page
app.use((req,res) => {
    res.send("Page Not Found!")
})

app.listen(3000, () => {
    console.log("server is listeninng on port 3000")
}) 