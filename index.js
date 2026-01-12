let express = require("express");
let app = new express();                                                                     
app.set("view engine","ejs")

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"concert-db.cp6ss68iifrg.us-east-1.rds.amazonaws.com",
  user: "admin",
  password: "fakepassword",
  database:"paradise-concerts",
  port: 3306,
 },
});



app.get("/",(req,res) => {
 knex
 .select()
 .from("venues")
 .then((result) => {
 let html = "<body><ul>";
 res.render("index", {aConcerts: result});
 }); 
});
app.listen(3000);

