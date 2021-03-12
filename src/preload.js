const { ipcRenderer, contextBridge } = require("electron");

contextBridge.exposeInMainWorld("BridgeApi", {
  messageApi: {
    sendMessage(data) {
      ipcRenderer.send("message", data);
    },
  },
  printApi: {
    sendPrint(data) {
      ipcRenderer.send("print", data);
    },
  },
});
