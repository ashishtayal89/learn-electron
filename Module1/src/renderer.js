const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;
document.getElementById("start-countdown").addEventListener("click", () => {
  console.log("clicked");
  ipcRenderer.send("start-countdown");
});

ipcRenderer.on("new-count", (evt, count) => {
  document.getElementById("countdown").innerHTML = count;
});
console.log("rendered");
