const mongoose = require("mongoose");

main()
.then(() => {
    console.log("connection successfull")
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");
} 

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "price is to low for amazon selling"],
    },
    discount: {
        type:Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String],
})

const Book = mongoose.model("Book", bookSchema);

// let  book1 = new Book({
//     title: "marvel comics v2",
//     price: "399",
//     genre: ["superhero","fiction","comedy"],
// });
// book1.save().then((res) => {
//     console.log(res);
// }) .catch((err) => {
//     console.log(err);
// })

Book.findByIdAndUpdate("68a84298a507c16dd6c668d6", {price: -500}, {runValidators:true})
.then((res) => {
    console.log(res);
}) .catch((err) => {
    console.log(err.errors.price.properties);
})