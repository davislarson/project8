let express = require("express");
let app = new express();                                                                     
app.set("view engine","ejs")

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"",
  user: "",
  password: "",
  database:"",
  port: ,
 },
});



app.get("/",(req,res) => {
 knex
 .select()
 .from("flavors")
 .then((result) => {
 let html = "<body><ul>";
 res.render("index", {aDonuts: result});
 }); 
});
app.listen(3000);

