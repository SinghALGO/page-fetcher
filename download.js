const request = require("request");
const { writeFile } = require("./writeFile");

function download(url, path) {
  request(url, (error, response, body) => {
    if (error || response.statusCode !== 200) {
      console.log("error", error);
    } else {
      writeFile(body, path);
    }
  });
}

module.exports = { download };
