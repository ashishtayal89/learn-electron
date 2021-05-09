const electron = require("electron");
const path = require("path");
const fs = require("fs");
const { BrowserWindow, Tray, app, Menu } = electron;

app.whenReady().then(() => {
  let window = new BrowserWindow({
    height: 400,
    width: 400,
    webPreferences: {
      nodeIntegration: true
    }
  });
  window.loadURL(`file://${__dirname}/git.html`);
  window.webContents.openDevTools();
  window.on("close", _ => {
    window = null;
  });
});
