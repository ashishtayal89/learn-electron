const electron = require("electron");
const path = require("path");
const fs = require("fs");
const { BrowserWindow, app, globalShortcut, screen } = electron;

let tray = null;
app.whenReady().then(() => {
  const window = new BrowserWindow({
    height: 500,
    width: 500,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  window.loadURL(`file://${__dirname}/capture.html`);
  window.webContents.openDevTools();
  globalShortcut.register("Ctrl+Shift+S", _ => {
    window.webContents.send("capture", screen.getPrimaryDisplay().workAreaSize);
  });
});
