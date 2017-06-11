import { app, BrowserWindow } from 'electron';

let mainWindow: Electron.BrowserWindow;

function createWindow() {
    let installExtension = require('electron-devtools-installer');
    installExtension.default(installExtension.VUEJS_DEVTOOLS)
        .then(() => {
            console.log('vue-devtools installed');
        })
        .catch(err => {
            console.log('Unable to install vue-devtools\n', err);
        })
    mainWindow = new BrowserWindow({
        height: 600,
        width: 1000,
        useContentSize: true
    })

    console.log(app.getAppPath());
    mainWindow.loadURL(`file://${app.getAppPath()}/dist/index.html`);

    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
})