const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/getsignedcookie", (req,res) => {
    res.cookie("made-in", "India", {signed: true});
    res.send("signed cookie send")
});

app.get("/verify", (req,res) => {
    console.log(req.signedCookies);
    res.send("verified")
})

app.get("/getcookies", (req,res) => {
    res.cookie("greet", "Namaste");
    res.cookie("madeIn", "India");
    res.send("sent you some cookies");
});

app.get("/greet", (req,res) => {
    let {name = 'anonnymous'} = req.cookies
    res.send(`hi ${name}`);
})

app.get("/", (req,res) => {
    console.dir(req.cookies);
    res.send("hi i'm a root")
})

app.listen(3000, () => {
  console.log("server is  listening to 3000")
})