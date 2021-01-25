const electron = require("electron");
const countdown = require("./countdown");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const ipcMain = electron.ipcMain;
let window = [];

app.on("ready", () => {
  [1, 2, 3].forEach(() => {
    let win = new BrowserWindow({
      height: 400,
      width: 400,
      webPreferences: {
        nodeIntegration: true
      }
    });
    win.loadURL(`file://${__dirname}/countdown.html`);
    win.on("closed", () => {
      win = null;
    });
    window.push(win);
  });
});

ipcMain.on("start-countdown", () => {
  window.forEach(win => {
    countdown(count => {
      win.webContents.send("new-count", count);
    });
  });
});
