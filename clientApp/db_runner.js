const db = require('./db_setup');
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
        
        db.getDB().collection(collection).find({}).toArray((err, documents)=>{
            if(err){
                console.log("error");
            }
            else{
                console.log("Connected to the database");

                //THIS IS FOR LOG-DATA TAB
                // ======================================================================
                // for(let i = 0; i < documents.length; i++){
                //     document.getElementById("log_list").innerHTML += ('<li><div class="user-container">'
                //                                                  + documents[i].entry + 
                //                                                  '</li></div>')


                // document.getElementById("button-addon2").addEventListener('click', ()=>{
                //     console.log("button is working");
                //     document.getElementById("log_list").innerHTML = "";
                //     for(let i = 0; i < documents.length; i++){
                //         document.getElementById("log_list").innerHTML += ('<li><dir class="entered-log">\
                // 			<p class="entered-sol">' + documents[i].time + '</p>\
                // 			<p class="log_display"> ' + documents[i].entry  +'</p>\
                // 		</dir>\
                // 	</li>')
                    // }
                // });

                // ======================================================================
                console.log("button is working");
                document.getElementById("data-tab").addEventListener("click", ()=>{
                    console.log("This is a log entry");
                    document.getElementById("list").innerHTML = "";
                    for(var i = 0; i < documents.length; i++){
                        document.getElementById("list").innerHTML += ('\
                            <li><dir class="entered-log">\
                            <p class="entered-sol">' + documents[i].time + '</p>\
                            <p class="log_display"> ' + documents[i].data + '</p>\
                            </dir>\
                            </li>\
                    ');
                }
            });      
        }
    }
)};

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
