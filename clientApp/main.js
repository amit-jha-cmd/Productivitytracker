const {ipcMain, ipcRenderer} = require('electron');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ejse = require('ejs-electron');
function createWindow() {
    //create the browser window
    let win = new BrowserWindow({width: 900, 
                                 height: 450, 
                                 frame: false,
                                 resizable: false
                                });
    // height: 400
    // width: 250


    // let child = new BrowserWindow({width: 400,
    //                                height: 250,
    //                                frame: false,
    //                                resizable: false,
    //                                parent: win,
    //                                modal: true});


    // child.setAlwaysOnTop(true);
    // win.setMenu(null);
    //and load the index.html of the app.
    // win.loadFile('index.html');
    //child.loadURL("file://" + __dirname + '/signin.ejs');
    win.loadURL('file://' + __dirname + '/index.ejs');
    win.on('closed', () => {
        //dereference the window object, usually you would store the windows
        //in an array if your app supports multi windows, this is the time
        //when you should delete the corresponding element.
        win = null;
    });
    // child.on('close', ()=>{
    //     child = null;
    // });

    // ipcMain.on('user', (event, arg) =>{
    //     console.log(arg);
    //     document.getElementById('username').innerHTML = args.username;
    //     document.getElementById('type').innerHTML = args.type;
    // });
}

app.on('ready', createWindow);

