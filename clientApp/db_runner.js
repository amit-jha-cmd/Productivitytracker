const collection = 'log';
const db = require("./db_setup")
        db.connect((err)=>{
            if(err){
                document.getElementById('banner').innerHTML = 'Unable to connect to the database';
                // console.log('Unable to connect to the database');
            }
            else{
                //document.getElementById('banner').innerHTML = 'Connected';
                // console.log('Connected to the database');
                db.getDB().collection(collection).find({}).toArray((err, documents)=>{
                    document.getElementById('banner').innerHTML = 'Error';
                    if(err){
                        document.getElementById('banner').innerHTML = 'Error';
                    }
                    else{
                        console.log(documents);
                        document.getElementById('banner').innerHTML = documents[0].time + " : " + documents[0].entry;
                    }
                });
            }
        });