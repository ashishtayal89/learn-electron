const electron = require("electron");
const fs = require("fs");
const { ipcRenderer: ipc, desktopCapturer, screen } = electron;

const saveScreenshot = png => {
  fs.writeFile("capture1.png", png, err => {
    if (err) {
      return console.log(`Failed to save screenshot : ${err}`);
    }
  });
};

const getScreenshot = async () => {
  const options = {
    types: ["window", "screen"]
  };
  const sources = await desktopCapturer.getSources(options);
  console.log(sources);
  return sources.filter(
    source => source.name === "Entire Screen" || source.name === "Screen 1"
  )[0];
};

ipc.on("capture", async () => {
  console.log("capture");
  const source = await getScreenshot();
  const png = source.thumbnail.toPNG();
  saveScreenshot(png);
});
