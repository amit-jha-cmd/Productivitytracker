const db = require('./database');
// const db = import('./db_setup');
var labelTime;
setInterval(()=>{
    var t = new Date();
    var hour = t.getHours();
    var min = t.getMinutes();
    var sec = t.getSeconds();

    labelTime = hour + ":" + min + ":" + sec; 
    document.getElementById("time").innerHTML = labelTime;
});

/*
document.getElementById("button-addon2").addEventListener('click', ()=>{
    console.log("button is working");
        
    });

document.getElementById("log_data").addEventListener("keydown", (event)=>{
    if(event.keyCode == 13 && event.shiftKey){
        event.preventDefault();
        document.getElementById("button-addon2").click();  
        console.log("this button is working") ;
        document.getElementById("last-updated").innerHTML = "Updated";
        return false;
    }
});
*/


const collection = 'log';
db.connect((err)=>{
    if(err){
        document.getElementById('banner').innerHTML = 'Unable to connect to the database';
        console.log('Unable to connect to the database');
    }
    else{
        
        document.getElementById("button-addon2").addEventListener('click', ()=>{
        console.log("button is working");
        var data =  document.getElementById("log_data").value;
        if(data != ""){
            var log = {
                "time" : labelTime,
                "data" : data,
            };
            document.getElementById("last-updated").innerHTML = "Last updated at: " + labelTime;
            db.getDB().collection(collection).insertOne(log);
            document.getElementById("log_data").value = null;
        }
        else{
            document.getElementById("last-updated").innerHTML = "Cannot enter null in DB";
        }
            
        });
        
        document.getElementById("log_data").addEventListener("keydown", (event)=>{
            if(event.keyCode == 13 && event.shiftKey){
                event.preventDefault();
                document.getElementById("button-addon2").click();   
                return false;
            }
        });
    

        document.getElementById("button-addon2").addEventListener("click", ()=>{
            log_update();
        });

        document.getElementById("data-tab").addEventListener("click", ()=>{
            log_update();
        });
        
        const log_update = () => {
            db.getDB().collection(collection).find({}).toArray((err, documents)=>{
            if(err){
                console.log("error");
            }
            else{
                console.log("Connected to the database");
                const log_list = () => {
                    console.log("This is a log entry");
                    document.getElementById("list").innerHTML = "";
                    for(var i = 0; i < documents.length; i++){
                        document.getElementById("list").innerHTML += ('\
                            <li><div class="input-group" style="margin: 0; width:100%;">\
                            <div class="input-group-prepend">\
                              <span class="input-group-text" style="background-color: rgb(62, 92, 224); color: white;"\
                                );">' + documents[i].time + '</span>\
                            </div>\
                            <div class="form-control" aria-label="With textarea" id="log_cont" contenteditable="false">' + documents[i].data + '</div>\
                          </div>\
                            </li>\
                    ');
                    }   
                }   
                    log_list();
                }
            }
        )};
    }

//should not be here. find another way to do it.
/*
db.getDB().collection.find({email: document.getElementById("email").value},
{pswd: document.getElementById("password").value}).toArray((err, documents)=>{
    document.getElementById("login").onclick('click', ()=>{
        var window = remote.getCurrentWindow();
        window.close();
    });
    document.getElementById("username").innerHTML = documents.email;
    document.getElementById("type").innerHTML = documents.type;
    console.log("login worked");
});
*/
}
);

/*
<div class="input-group-append">\
    <span class="input-group-text" style="background-color: red; color: white;">X</span>\
</div>\
*/