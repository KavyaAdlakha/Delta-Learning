const mongoose = require("mongoose")
const Chat = require("./models/chat.js")


main().then(() => {
    console.log("connection successful")})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp'); 
}

let allchats = [
    {
  from: "arjun",
  to: "kavya",
  msg: "are you coming to class tomorrow?",
  created_at: new Date()
},
{
  from: "meera",
  to: "rahul",
  msg: "please share the assignment pdf",
  created_at: new Date()
},
{
  from: "vishal",
  to: "ananya",
  msg: "let’s meet at the library after lunch",
  created_at: new Date()
},
{
  from: "sneha",
  to: "rohit",
  msg: "happy birthday! have a great day 🎉",
  created_at: new Date()
}

]

Chat.insertMany(allchats);