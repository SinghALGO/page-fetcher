const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function writeProcess(path, data) {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.log(err);
    }
    let stats = fs.statSync(path);
    let fileSizeInBytes = stats.size;
    console.log(
      `Downloaded and saved ${fileSizeInBytes} bytes to ./index.html`
    );
  });
}
function writeFile(data, path) {
  const fileExistsOrNot = fs.existsSync(path);
  if (fileExistsOrNot) {
    rl.question(
      "The file path already exists! Press Y if you want to overwrite it.    ",
      (answer) => {
        if (answer === "y") {
          writeProcess(path, data);
          rl.close();
        }
      }
    );
  } else {
    writeProcess(path, data);
    rl.close();
  }
}
module.exports = { writeFile };
