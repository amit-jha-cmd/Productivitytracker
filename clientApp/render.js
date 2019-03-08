
const {BrowserWindow} = require('electron').remote;
document.getElementById('exit').addEventListener('click', ()=>{
    var window = BrowserWindow.getFocusedWindow();
    window.close();
});