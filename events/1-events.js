var events = require("events");
var EventEmitter = events.EventEmitter;
var ee = new EventEmitter();

const PING = "PING";
ee.once(PING, function handlePing(args) {
  console.log("Received ping event1", args);
});

ee.once(PING, function handlePing(args) {
  console.log("Received ping event2", args);
});

ee.once(PING, function handlePing(args) {
  console.log("Received ping event3", args);
});

console.log(ee.listenerCount("PING"));
ee.emit(PING);
console.log(ee.listenerCount("PING"));
ee.emit(PING);
ee.emit(PING);
