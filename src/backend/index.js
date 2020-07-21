const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRows");

ipcMain.on("process-subtitles", (event, paths) => {
  pathsToRows(paths)
    .then((rows) => console.log(rows))
    .then(() => {
      event.reply("process-subtitles", [
        { name: "i", amount: 1234 },
        { name: "you", amount: 900 },
        { name: "she", amount: 853 },
        { name: "our", amount: 853 },
        { name: "he", amount: 853 },
      ]);
    });
});
