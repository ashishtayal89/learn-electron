const electron = require("electron");

const { BrowserWindow, Menu, app, clipboard, globalShortcut } = electron;

const registerGlobalShortcuts = textList => {
  globalShortcut.unregisterAll();
  textList.map((text, i) => {
    globalShortcut.register(`Ctrl+Alt+${i + 1}`, _ => {
      clipboard.writeText(text);
    });
  });
};

const updateTextList = (text, textList) => [text, ...textList];

const getTemplate = textList => {
  return [
    {
      label: "Clipboard",
      submenu: textList.map((text, i) => {
        return {
          label: text,
          click: _ => {
            clipboard.writeText(text);
          },
          accelerator: `Ctrl+Alt+${i + 1}`
        };
      })
    }
  ];
};

const checkClipboardForChange = onChange => {
  let latest;
  let cache = clipboard.readText();
  setInterval(() => {
    latest = clipboard.readText();
    if (latest !== cache) {
      cache = latest;
      onChange(latest);
    }
  }, 1000);
};

app.on("ready", () => {
  let textList = [];
  let template;
  new BrowserWindow();
  checkClipboardForChange(text => {
    textList = updateTextList(text, textList);
    registerGlobalShortcuts(textList);
    template = getTemplate(textList);
    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
  });
});
