// Fire multiple events at same time when a single event is triggred

const events = require("events");

const eventEmitter = new events.EventEmitter();

const secondEvent = () => {
  console.log("This is second event");
};

const thirdEvent = () => {
  console.log("This is third event");
};

// Create an event handler:
const myEventHandler = () => {
  console.log("I hear a scream!");
  secondEvent();
  thirdEvent();
};
// Assign the event handler to an event:
eventEmitter.on("scream", myEventHandler);
// Fire the 'scream' event:
eventEmitter.emit("scream");
