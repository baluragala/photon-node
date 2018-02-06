const fs = require("fs");

const readableStream = fs.createReadStream("./hotel.js");
const writableStream = fs.createWriteStream("./hotle-new-copy.js");

readableStream.pipe(writableStream);

// readableStream.on("data", function(chunk) {
//   writableStream.write(chunk);
// });

// readableStream.on("end", function() {
//   writableStream.end();
//   console.log("file read completed");
// });

// readableStream.on("close", function() {
//   writableStream.close();
//   console.log("stream is closed");
// });

// readableStream.on("error", function(err) {
//   console.log("Error", err);
// });
