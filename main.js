const { app, BrowserWindow, screen } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;
if (isDev) {
  require("electron-reload")(__dirname, {
    electron: path.join(__dirname, "node_modules", ".bin", "electron"),
  });
}

function createWindow() {
  //const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const width = 800;
  const height = 600;

  const mainWin = new BrowserWindow({
    width: width,
    height: height,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      worldSafeExecuteJavaScript: true,
    },
  });

  // and load the index.html of the app.
  mainWin.loadFile(path.join(__dirname, "index.html"));

  // Open the DevTools.
  mainWin.webContents.openDevTools();

  // Remove title bar menu
  // mainWin.removeMenu();
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
