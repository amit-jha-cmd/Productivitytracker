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
                    // document.getElementById('banner').innerHTML = 'Error';
                    if(err){
                        console.log("error");
                    }
                    else{
                        // console.log(typeof(documents.length));
                        // setInterval(()=>{
                        //     for(let i = 0; i < documents.length; i++){
                        //         // console.log("Inside here");
                        //         var node = document.createElement("LI");
                        //         node.appendChild(document.createTextNode(documents[0].entry));
                        //         document.getElementById("log_list").appendChild(node);
                        //     }
                            
                        // });


                        document.getElementById("button-addon2").addEventListener('click', ()=>{
                            document.getElementById("log_list").innerHTML = "";
                            for(let i = 0; i < documents.length; i++){
                                document.getElementById("log_list").innerHTML += ('<li><div class="user-container">'
                                                                             + documents[i].entry + 
                                                                             '</li></div>')
                            }
                        });

                        
                        // for(i = 0; i < document.length; i++){
                        //     // var eleNode = ;
                        //     node.appendChild(document.createTextNode(String(document[i].entry)));
                        // };

                        //document.getElementById('log_list').innerHTML = documents[0].entry;
                    }
                });
            }
        });