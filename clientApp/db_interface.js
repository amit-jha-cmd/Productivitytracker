const mongoose = require("mongoose")
const db = require('./database');
var labelTime;
var date;
var month;
var year;
setInterval(()=>{
    var t = new Date();
    var hour = t.getHours();
    var min = t.getMinutes();
    var sec = t.getSeconds();
    labelTime = hour + ":" + min + ":" + sec; 
    date = t.getDate();
    mon = t.getMonth();
    year = t.getFullYear();
    document.getElementById("time").innerHTML = labelTime;
});


const collection = 'appData';
db.connect((err)=>{
    if(err){
        document.getElementById('banner').innerHTML = 'Unable to connect to the database';
        console.log('Unable to connect to the database');
    }
    else{
        // console.log(logcount);

        db.getDB().collection(collection).find({}).toArray((err, documents)=>{
            if(err){
                console.log("error");
            }
            else{
                for(var i = 0; i < documents[0].history.app.length; i++){
                    document.getElementById("Productivity").innerHTML += ('\
                    <div class="input-group" style="width: 95%; margin-left:5px;">\
                    <div class="input-group-prepend">\
                        <span class="input-group-text" style="background: rgb(82, 82, 224); color: white; width: 200px;">' + documents[0].history.app[i].name + '</span>\
                    </div>\
                    <p type="text" aria-label="Last name" class="form-control">'+  documents[0].history.app[i].duration +'</p>\
                </div>\
                ');
                }
                if(documents[0].lastUpdated !== null){
                    document.getElementById("last-updated").innerHTML = "Last updated at: " + documents[0].lastUpdated;
                }
                else{
                    document.getElementById("last-updated").innerHTML = "Last updated at: Never";
                }
            }
            });   


        document.getElementById("button-addon2").addEventListener('click', ()=>{
        console.log("button is working");
        var data =  document.getElementById("log_data").value;
        if(data != ""){
            var log = {
                "log" : data,
                "date": null,
                "time" : labelTime,
                "tag": null
            };
            logcount++;
            // db.getDB().collection(collection).insertOne({"log":"2"});
            db.getDB().collection(collection).updateOne({_id: mongoose.Types.ObjectId("5d2e0325efa0501e168696bc")}, 
                                                    {$push: {"log": log}});
            db.getDB().collection(collection).updateOne({_id: mongoose.Types.ObjectId("5d2e0325efa0501e168696bc")}, {
                $inc: {logCount: logcount}
            });
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
        });`    `
    

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
                const log_list = () => {
                    document.getElementById("list").innerHTML = "";
                    for(var i = 0; i < documents[0].logCount; i++){
                        document.getElementById("list").innerHTML += ('\
                            <li><div class="input-group" style="margin: 0; width:100%;">\
                            <div class="input-group-prepend">\
                              <span class="input-group-text" style="background-color: rgb(62, 92, 224); color: white;"\
                                );">' + documents[0].log[i].time + '</span>\
                            </div>\
                            <div class="form-control" aria-label="With textarea" id="log_cont" contenteditable="false">' + documents[0].log[i].log + '</div>\
                            <div class="input-group-append" style="margin-right: 30px;">\
                                <span class="input-group-text" style="background-color: red; color: white;">X</span>\
                            </div>\
                          </div>\
                            </li>\
                    ');
                    }   
                }   
                    log_list();
                }
            }
        )};

        var id;
        var str = "";
        const login = ()=> {
            db.getDB().collection(collection).find({email: document.getElementById("email").value},
            {pswd: document.getElementById("password").value}).toArray((err, documents)=>{
                if(err){
                    console.log("login attempt failed");
                }
                else{
                    document.getElementById('pswd_cont').remove();
                    id = documents[0]._id.id;
                    console.log(id);
                    id.forEach(ele => {
                        str += ele.toString();
                    });
                }
                
            });
            id = str;
        };

        document.getElementById('login').addEventListener('click', ()=>{
            login();
        });
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