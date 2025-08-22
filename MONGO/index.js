const mongoose = require("mongoose");

main()
.then(() => {
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
} 

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number,
});

const User = mongoose.model("User", userSchema);

// const user1 = new User ({name: "adam", email:"adam@email.com", age:48});
// const user2 = new User ({name: "eve", email:"eve@email.com", age:18});

// user1.save()
// user2 .save().then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.insertMany([
//     {name:"tony", email: "tony@email.com", age:25},
//     {name:"bruce", email:"bruce@email.com", age:30},
//     {name:"peter", email:"peter@email.com", age:32},
// ]).then((res) => {
//     console.log(res);
// });


// User.find({}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.find({age: {$gt:47}}).then((res) => {
//     console.log(res[0].name);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findOne({age: {$gt:30}}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.find({_id:'68a6dbaa87f005a3604c88e2'}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findById('68a6dbaa87f005a3604c88e2').then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.updateOne({name:"peter"}, {age:35}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.updateMany({age: {$gte:30}}, {age:29}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.findOneAndUpdate({name:"peter"}, {age:39}, {new:true}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

// User.deleteOne({name:"peter"}).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.log(err);
// })

User.deleteMany({age: 29}).then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
})