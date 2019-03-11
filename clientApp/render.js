const {BrowserWindow} = require('electron').remote;
document.getElementById('exit').addEventListener('click', ()=>{
    window.close();
});