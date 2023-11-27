const { download } = require("./download");

const url = process.argv[2];
const path = process.argv[3];

if (!url || !path) {
  console.log("Please add valid parameters");
  console.log("Format: node fetcher.js <url> <local-path>");
} else {
  download(url, path);
}
