const mongoose = require("mongoose");
const {Schema} = mongoose;

main().then(() => console.log("connection successful")).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/relationdemo');
}

const userSchema = new Schema({
    username: String,
    email: String
});  

const postSchema = new Schema({
    content: String,
    likes: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

const addData = async () => {
    // let user1 = new User ({
    //     username: "Kavya Adlakha",
    //     email: "kavya@gmail.com"
    // });

    let user = await User.findOne({username: "Kavya Adlakha"})

    let post2 = new Post({
        content: "bye bye",
        likes: 24
    });

    post2.user = user;

    // await user1.save();
    await post2.save();
};

addData();