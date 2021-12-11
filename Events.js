// Here we require the 'events' module and assign this to a variable
let events = require('events');

// this is our function that will print the text we wish
let listenerCallback = (data) => {
    console.log('Celebrate ' + data);
}

// now, we assign an event to a variable 
let myEmitter = new events.EventEmitter();

// the method '.on( )' will assign the function we have created to a 'listener'
myEmitter.on('celebration', listenerCallback);

// then we can use the method '.emit( )' to call our listener and provide the data that our function need
myEmitter.emit('celebration', 'Lincolns Birthday');

// this should print 'Celabrate Lincolns Birthday' on the console
