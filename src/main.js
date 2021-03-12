const { app, BrowserWindow, screen, ipcMain, dialog } = require("electron");
const e = require("express");
const path = require("path");

const isDev = !app.isPackaged;

let mainWin = undefined;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  // const width = 800;
  // const height = 600;

  mainWin = new BrowserWindow({
    width: width,
    height: height,
    minHeight: 600,
    minWidth: 800,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });
  console.log(__dirname);
  // and load the index.html of the app.

  mainWin.loadFile(path.join(__dirname, "dist", "index.html"));

  // Open the DevTools.
  mainWin.webContents.openDevTools();

  // Remove title bar menu
  mainWin.removeMenu();
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// -------------------------------- I P C --------------------------------

ipcMain.on("message", (e, data) => {
  dialog.showMessageBox(mainWin, {
    message: data.message,
    title: data.title,
  });
});
