var hotelServices = require("./lib");

var takeOrder = hotelServices.takeOrder;

let itemsForTable1 = ["french fires", "fried rice", "vanjaram fish"];
let itemsForTable2 = ["tea", "coke"];
let itemsForTable3 = [
  "french fires",
  "fried rice",
  "vanjaram fish",
  "falooda",
  "tandoori",
  "pasta",
  "noodles"
];

hotelServices.restrauntEvents.emit("TAKE_ORDER", itemsForTable1, "table1");
hotelServices.restrauntEvents.emit("TAKE_ORDER", itemsForTable2, "table2");
hotelServices.restrauntEvents.emit("TAKE_ORDER", itemsForTable3, "table3");
