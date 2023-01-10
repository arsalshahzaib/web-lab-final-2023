const express = require('express');
var app = express();
const https = require('https');
var bodyParser=require("body-parser");

app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
var items=[];
var workitems=[];
var listTitle;
app.get("/", function(req, res)
{
  var today = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var day = today.toLocaleString("en-us", options);
  res.render("list", {listTitle:"TODOs", newListItem: items });

});

app.post("/", function(req, res)
{
  item=req.body.newItem;
  if(req.body.list === "Work")
  {
    workitems.push(item);
    res.redirect("/work");
  }
  else
  {
    items.push(item);
    res.redirect("/");
  }
});

app.post("/delete", function(req, res) {
  console.log(req.body.checkbox);
});



app.get("/work", function(req, res)
{
  var today=new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  res.render("list", {listTitle:"Work List", newListItem: workitems});
});


  app.listen(3000, function()
  {
    console.log("Server is running on port 3000");
  });
