var enter_log = document.getElementById("log");
var count;
var months = {
	1: "January",
	2: "February",
	3: "March",
	4: "April",
	5: "May",
	6: "June",
	7: "July",
	8: "August",
	9: "September",
	10: "October",
	11: "November",
	12: "December"
};

setInterval(function(){
	var t = new Date();
	var hours = t.getHours();
	var min = t.getMinutes();
	var sec = t.getSeconds();
	var date = t.getDate();
	var month = t.getMonth();
	var year = t.getFullYear();
	// var day = t.getDay();
	var time = hours + ":" + min + ":" + sec;
	document.getElementById("sol").innerHTML = time;
	document.getElementById("day").innerHTML = date +" "+ months[month] +", "+ year;
});

enter_log.addEventListener("keyup", function(event){
	if(count <= 301){
		if(event.keyCode === 13){
			event.preventDefault();
			if(enter_log.value !== "\n"){
				document.getElementById("submit").click();
			}
			else {
				alert("Log cannot be empty");
				document.getElementById("log").value = null;
			}
		}
	}
});

setInterval(function(){
	count = document.getElementById("log").value.length;
	document.getElementById("character-count").innerHTML = count;
	if(count > 300){
		document.getElementById("character-count").style.color = "#A93226";
		document.getElementById("submit").disabled = true;	
	}
	else {
		document.getElementById("character-count").style.color = "#196F3D";
		document.getElementById("submit").disabled = false;	
	}
});


