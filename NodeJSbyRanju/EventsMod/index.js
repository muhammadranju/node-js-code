const EventEmitter = require("events");

const event = new EventEmitter();

event.on("setMyname", (sc,mag) => {
    console.log(`Status is ${sc} and the page is ${mag}`);
    
});
event.on("setMyname", (sc,mag,an) => {
    console.log(`The Status fine ${an} ${mag}`);
    
});

event.emit("setMyname", 200, "Ok","and");
