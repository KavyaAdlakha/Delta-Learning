const express = require("express");
const app = express();
const ExpressError = require("./ExpressError")

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
    throw new ExpressError(401, "ACCESS DENIED!")
}

app.get("/api", checkToken, (req,res) => {
    res.send("data");
})

app.get("/", (req,res) => {
    res.send("hi i am root")
});

app.get("/random", (req,res) => {
    res.send("this is ranndom page")
});

//error handling------------------------------>
app.get("/err", (req,res) => {
    abc=abc
});

app.get("/admin", (req,res) => {
    throw new ExpressError(403, "ACCESS TO ADMIN IS FORBIDDEN")
})

// app.use((err,req,res,next) => {
//    console.log("----error----"); 
//    next(err)
// })

app.use((err,req,res,next) => {
    let {status=500, message="Some Error Occured"} = err;
    res.status(status).send(message);
})

//404 page
app.use((req,res) => {
    res.status(404).send("Page Not Found!")
})

app.listen(3000, () => {
    console.log("server is listeninng on port 3000")
}) 