function err(message: string): never {
    throw new Error(message);
  }
  
  // processEvents function lets say is a function that run continuously and process a bunch of events
  function processEvents(): never {
    while (true) {
      // process an event
    }
  }
  
  // processEvents()
  err("...");
  // console.log("something after processing events");
  