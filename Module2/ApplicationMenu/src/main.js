const electron = require("electron");

const app = electron.app;
const { BrowserWindow, Menu } = electron;

app.on("ready", () => {
  const window = new BrowserWindow();
  const appName = electron.app.getName();
  const template = [
    {
      label: appName,
      submenu: [
        {
          label: `About ${appName}`,
          role: "about"
        },
        { type: "separator" },
        {
          label: "Open Dev Tools",
          click: _ => window.webContents.openDevTools(),
          accelerator: "Ctrl+Shift+I"
        },
        { label: "Quit", click: _ => app.quit(), accelerator: "Ctrl+Q" }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
});
