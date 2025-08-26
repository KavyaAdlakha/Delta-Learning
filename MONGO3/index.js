const express = require("express")
const mongoose = require("mongoose")
const app = express();
const path = require("path");
const Chat = require("./models/chat.js")
const methodOverride = require("method-override");
const ExpressErrors = require("./ExpressErrors.js")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

main().then(() => {
    console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/fakewhatsapp'); 
}

//index route--------------->

app.get("/chats", asyncwrap( async (req, res,next) => {
        let chats = await Chat.find()
    console.log(chats);
    res.render("index.ejs", {chats})
})
);

//new route-------------------->

app.get("/chats/new", (req,res) => {
    res.render("new.ejs")
})

//create route--------------->

app.post("/chats", asyncwrap( async (req,res,next) => {
        let {from, to ,msg} = req.body;
        let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
        });

        await newChat.save()
        res.redirect("/chats")
})
);

//async wrap------------------------>
function asyncwrap(fn) {
    return function( req, res, next) {
        fn( req, res, next).catch((err) => next(err));
    }
}

//NEW - Show Route----------------------->

app.get("/chats/:id", asyncwrap( async (req,res,next) => {
    
        let {id} = req.params;
    let chat = await Chat.findById(id);
    if(!chat) {
        next(new ExpressErrors(404, "Chat Not Found"));
    }
    res.render("edit.ejs", {chat})
    
}))

//edit route--------------------->

app.get("/chats/:id/edit", asyncwrap( async (req,res) => {
        let {id} = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", {chat});
})
);

//update route-------------------->
app.put("/chats/:id", asyncwrap( async (req,res) => {
    let {id} = req.params;
    let {msg: newMsg} = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(
        id,
        {msg: newMsg,
         updated_at: new Date()   
        },
        {runValidators: true, new: true}
    );
    console.log(updatedChat);
    res.redirect("/chats");
})
);

//destroy route---------------------->

app.delete("/chats/:id", asyncwrap( async (req,res) => {
    let {id} = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect("/chats");
})
);

app.get("/", (req,res) => {
    res.send("rooot is working")
})

const handleValidationErr = (err) => {
    console.log("this was a validation error please follow rule");
    console.dir(err.message)
    return err;
}

app.use((err, req, res, next) => {
    console.log(err.name);
    if(err.name === "ValidationError") {
      err =  handleValidationErr(err)
    }
    next(err);
})

//Error handling middle ware
app.use((err,req,res,next) => {
    let {status=500, message="Some Error Occured"} = err;
    res.status(status).send(message)
});

app.listen(8080, () => {
    console.log("server s running on port 8080")
});