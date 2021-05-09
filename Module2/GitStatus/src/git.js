const fs = require("fs");
const { exec } = require("child_process");

const isDir = dir => {
  try {
    return fs.lstatSync(dir).isDirectory();
  } catch (e) {
    return false;
  }
};

const checkGitStatus = dir => {
  exec("git status", { cwd: dir }, (err, stdout, stderr) => {
    if (err) {
      console.log(err);
    }
    console.log({ stderr, stdout });
    document.getElementById("status").innerHTML = stderr || stdout;
  });
};

const debounce = (func, delay) => {
  let timeoutKey;
  return (...args) => {
    clearTimeout(timeoutKey);
    timeoutKey = setTimeout(() => func.apply(this, args), delay);
  };
};

const pathUpdateHandler = e => {
  document.getElementById("status").innerHTML = "";
  const dir = e.target.value;
  if (isDir(dir)) {
    checkGitStatus(dir);
  }
};

document
  .getElementById("git_dir")
  .addEventListener("keyup", debounce(pathUpdateHandler, 500));
