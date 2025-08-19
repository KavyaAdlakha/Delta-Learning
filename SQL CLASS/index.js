const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methdoOverride = require("method-override");

app.use(methdoOverride("_method"));
app.use(express.urlencoded({extended: true}))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"))

///create a connection to database
const  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: ''
});


let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
    faker.internet.email(),
    faker.internet.password(),
  ];
}

// Home Route------------------------------->

app.get("/", (req,res) => {
    let q = `SELECT count(*) FROM user`;
    try{
    connection.query(q, (err, result) => {
    if (err) throw err;
    let count = result[0]["count(*)"];
    res.render("home.ejs", {count});
    });
    } catch(err) {
    console.log(err);
    res.send("some error in database")
    }
});

//Show User------------------------------------->

app.get("/user", (req,res) => {
    let q = `SELECT id, username, email From user`
    try{
    connection.query(q, (err, users) => {
    if (err) throw err;
    res.render("showusers.ejs", {users});
    });
    } catch(err) {
    console.log(err);
    res.send("some error in database")
    }
});

//Edit Route---------------------------------->

app.get("/user/:id/edit", (req,res) => {
    let {id} = req.params
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try{
    connection.query(q, (err, result) => {
    if (err) throw err;
    let user = result[0];
    res.render("edit.ejs", {user});
    });
    } catch(err) {
    console.log(err);
    res.send("some error in database")
    }
});

//Update (DB) Route-------------------------------->

app.patch("/user/:id", (req,res) => {
    let {id} = req.params
    let {password: formPass, username: newUsername} = req.body
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try{
    connection.query(q, (err, result) => {
    if (err) throw err;
    let user = result[0];
    if(formPass != user.password) {
        res.send("WRONG PASSWORD")
    } else {
       let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
       connection.query(q2, (err, result) => {
        if(err) throw err;
        res.redirect("/user")
       })
    }
    });
    } catch(err) {
    console.log(err);
    res.send("some error in database")
    }
})

app.listen("8080", () => {
    console.log("server is listening to port 8080")
})











// practice part------------------------------------------------------------------------->

// let q = "SHOW TABLES";
// try{
//     connection.query(q, (err, result) => {
//     if(err) throw err;
//     console.log(result);
//     console.log(result.length);
//     console.log(result[0]);
//     console.log(result[1]);
// })
// } catch (err) {
//     console.log(err);
// }


// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// let users = [ 
//     ["123b", "123_newuserb", "123@gmail.comb", "123456b"],
//     ["123c", "123_newuserc", "123@gmail.comc", "123456c"]
// ];

// let data = [];
// for(i=1; i<=100; i++){
//     // console.log(getRandomUser());
//     data.push(getRandomUser());  //100fake user data
// }

 
// try{
//  connection.query(q, [data], (err, result) => {
//     if(err) throw err;
//     console.log(result);
//  });
// } catch(err) {
//     consolelog(err);
// }
// connection.end();  //to close connection
