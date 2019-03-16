const electron = require('electron');
const {app, BrowserWindow} = require('electron');
const ejse = require('ejs-electron');
function createWindow() {
    //create the browser window
    let win = new BrowserWindow({width: 900,
                                 height: 500, 
                                 frame: false,
                                 resizable: false
                                });
    // win.setMenu(null);
    //and load the index.html of the app.
    // win.loadFile('index.html');
    win.loadURL('file://' + __dirname + '/index.ejs');
    win.on('closed', () => {
        //dereference the window object, usually you would store the windows
        //in an array if your app supports multi windows, this is the time
        //when you should delete the corresponding element.
        win = null;
    });
}

app.on('ready', createWindow);

