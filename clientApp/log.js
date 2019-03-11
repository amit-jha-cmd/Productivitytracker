setInterval(()=>{
    var t = new Date();
    var hour = t.getHours();
    var min = t.getMinutes();
    var sec = t.getSeconds();

    var labelTime = hour + ":" + min + ":" + sec; 
    document.getElementById("time").innerHTML = labelTime;
});

