var events = require("events");
var EventEmitter = events.EventEmitter;
var ee = new EventEmitter();

ee.on("SERVE_FOOD", serveFood);
ee.on("TAKE_ORDER", takeOrder);

function takeOrder(items, tableNumber) {
  console.log("take Order", tableNumber);
  prepareFood(items, tableNumber, serveFood);
}

function prepareFood(items, tableNumber, cb) {
  console.log("prepareFood", tableNumber);
  let preparationTime = items.length * 1000;
  setTimeout(function serverFoodCallback() {
    if (items.length > 5) {
      ee.emit("SERVE_FOOD", "order cannot be cooked", null, null);
    } else {
      ee.emit("SERVE_FOOD", null, items, tableNumber);
      //cb(null, items, tableNumber);
    }
  }, preparationTime);
}

function serveFood(err, items, tableNumber) {
  if (err) {
    console.log("Order cancelled");
    return;
  }
  console.log("Server Food:", items, tableNumber);
}

module.exports.restrauntEvents = ee;
