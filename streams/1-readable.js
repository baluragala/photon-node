const fs = require("fs");

const readableStream = fs.createReadStream("./hotel.js");

readableStream.on("data", function(chunk) {
  console.log(`Data - ${chunk}`);
});

readableStream.on("end", function() {
  console.log("file read completed");
});

readableStream.on("close", function() {
  console.log("stream is closed");
});

readableStream.on("error", function(err) {
  console.log("Error", err);
});
