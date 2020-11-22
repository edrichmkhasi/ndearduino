// const { Board, Led } = require("johnny-five");
// let board = new Board();

// board.on("ready", function() {
//   let led = new Led(13);
//   led.blink(500);
// });

const five = require('johnny-five');
const board = new five.Board();
let led;
let toggleState = false;
button = false;

board.on("ready", function() {
  console.log('Board is ready!!!');
  led = new five.Led(13);
  let toggle = new five.Switch(8);
  console.log('The LED is flashing');

  board.repl.inject({
    toggle: toggle
  });

  // Switch Event API

  // "closed" the switch is closed
  toggle.on("close", function() {
    console.log("closed");
    led.on();
  });

  // "open" the switch is opened
  toggle.on("open", function() {
    console.log("open");
    led.off();
  });
}) 

console.log('\nWaiting for device to connect ... ');
