
// BACKEND-SERVER SIDE
var express = require("express");
app = express();

var bodyparser = require("body-parser");
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var logs = [];
var time, date, month;

setInterval(function(){
	var t = new Date();
	var hours = t.getHours();
	var min = t.getMinutes();
	var sec = t.getSeconds();
	month = t.getMonth();
	date = t.getDate();
	time = hours + ":" + min + ":" + sec;
});


app.post("/post", function(req, res){
	var log = req.body.log;
	// var t = time;
	var entry = {
		log_date: date,
		log_time: time,
		data: log
	};
	console.log(entry.data);
	if(log !== ""){
		logs.push(entry);
	
	}
	res.redirect("/");
	
});

app.post("/del/:logNum", function(req, res){
	var pos = req.params.logNum;
	logs.splice(pos, 1);
	res.redirect("/");
});	

app.get("/", function(req, res){
	res.render("home", {logs: logs});
});

app.get("/about", function(req, res){
	res.render("about");
});

app.get("/login", function(req, res){
	res.render("login");
});

app.get("/chat", function(req, res){
	res.render("chat");
});
app.listen(3000, function(){
	console.log("Server is running");
});