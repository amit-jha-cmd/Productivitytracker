const activeWin = require('active-win');
document.getElementById("login").__proto__.aaaa = "amit";
console.log(document.getElementById("login").__proto__)


db.connect((err)=>{
    if(err){
        document.getElementById('banner').innerHTML = 'Unable to connect to the database';
        console.log('Unable to connect to the database');
    }
    else{
        db.getDB().collection(collection).find({_id: mongoose.Types.ObjectId("5d2e0325efa0501e168696bc")}).toArray((err, documents)=>{
            if(err){
                console.log("error");
            }
            else{
                console.log(documents[0]._id.toString());
                console.log(documents[0].history);
                setInterval(() => {
                    var win = activeWin.sync();
                    if(documents[0].history.web.website[0].alias === 'YouTube'){
                        console.log(activeWin.sync());
                    }

                    if(win.owner.name === documents[0].history.app[0].alias){
                        db.getDB().collection(collection).updateOne({_id: mongoose.Types.ObjectId("5d2e0325efa0501e168696bc")}, 
                                                    {$inc: {"history.app.0.duration": 1}});
                    }
                    else if(win.owner.name === documents[0].history.app[1].alias){
                        db.getDB().collection(collection).updateOne({_id: mongoose.Types.ObjectId("5d2e0325efa0501e168696bc")}, 
                                                    {$inc: {"history.app.1.duration": 1}});
                    }
                    else if(win.owner.name === documents[0].history.app[2].alias){
                        db.getDB().collection(collection).updateOne({_id: mongoose.Types.ObjectId("5d2e0325efa0501e168696bc")}, 
                                                    {$inc: {"history.app.2.duration": 1}});
                    }
                }, 5000);
            }
        });   
    }
});