const { ipcMain } = require("electron");

const pathsToRows = require("./pathsToRows");
const prepareData = require("./prepareData");

ipcMain.on("process-subtitles", (event, paths) => {
  pathsToRows(paths)
    .then((rows) => prepareData(rows))
    .then(words => console.log(words))
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
