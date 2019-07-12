const {ipcRenderer} = require('electron');
const remote = require('electron').remote;
document.getElementById('exit').addEventListener('click', ()=>{
    var window = remote.getCurrentWindow();
    window.close();
});

