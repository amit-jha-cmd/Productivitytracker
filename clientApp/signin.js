const remote = require('electron').remote;
// const ipcRenderer = require('electron').ipcRenderer;
const collection = 'log';
const db = require("./db_setup");
document.getElementById("signin_btn").onclick = ()=>{
    console.log("connecting to the database");
    console.log(document.getElementById('email').value);
    db.connect((err)=>{
        if(err){
            // document.getElementById('banner').innerHTML = 'Unable to connect to the database';
            console.log('Unable to connect to the database');
        }
        else{
            //should not be here. find another way to do it.
            db.getDB().collection(collection).findOne({email: document.getElementById("email").value,
                pswd: document.getElementById("password").value}, (err, user)=>{
                    if(err){
                        console.log("something went wrong");
                    } else if(!user){
                        console.log("user not found");
                        
                        document.getElementById("unsuccessful").innerHTML = "Password or username incorrect";
                    }
                    else{
                        require('electron').ipcRenderer.send('user', user);
                        console.log("success");
                        var window = remote.getCurrentWindow();
                        window.close();
                    }
            });
        }
    });
};
