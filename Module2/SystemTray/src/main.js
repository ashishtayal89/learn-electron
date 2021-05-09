const electron = require("electron");
const path = require("path");
const fs = require("fs");
const { BrowserWindow, Tray, app, Menu } = electron;

let tray = null;
app.whenReady().then(() => {
  const window = new BrowserWindow();
  const iconPath = path.join(__dirname, "trayIcon.ico");
  if (fs.existsSync(iconPath)) {
    console.log(iconPath);
    tray = new Tray(iconPath);
    const contextMenu = Menu.buildFromTemplate([
      { label: "Item1", type: "radio" },
      { label: "Item2", type: "radio" },
      { label: "Item3", type: "radio", checked: true },
      { label: "Item4", type: "radio" }
    ]);
    tray.setToolTip("This is my application.");
    tray.setContextMenu(contextMenu);
    tray.setHighlightMode("always");
  }
});
