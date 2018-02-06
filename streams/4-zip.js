const fs = require("fs");
const zlib = require("zlib");

fs
  .createReadStream("./hotel.js")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("hotel.zip"));
