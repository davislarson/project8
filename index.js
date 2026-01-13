let express = require("express");
let app = new express();                                                                     
app.set("view engine","ejs")

// set up database connection
const knex = require("knex")({
 client: "mysql",
 connection: {
  host:"donut-rds-instance.cj6c8u2cqrgo.us-east-2.rds.amazonaws.com",
  user: "admin",
  password: "DonutPass123",
  database:"donutdb",
  port: 3306,
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

