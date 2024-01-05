// create a Rid class that does include some logic of dealing with ride instances and active rides
// class Rid {
//   // define a property to keep track of active rides
//   activeRides: number = 0;
//   start() {
//     // in crease the number of active rides
//     this.activeRides++;
//   }
//   stop() {
//     // in decrease the number of active rides
//     this.activeRides--;
//   }
// }
// // create 2 new instances of the Ride class
// const ride1 = new Rid();
// ride1.start()
// const ride2 = new Rid();
// ride2.start()
// console.log(ride1.activeRides); // => 1
// console.log(ride2.activeRides); // => 1
// we are expecting activeRides to be 2 but since ride1 and ride2 are two independent instances of Ride class they are tracking activeRides independently
// to solve this issue and and have a single place for tracking the activeRides we need to use class static-members
// static properties are those properties that belong to the class not the instances of that class and serves as a global place shared among all instances of that class
var Ride = /** @class */ (function () {
    function Ride() {
    }
    Object.defineProperty(Ride, "activeRides", {
        get: function () {
            return Ride._activeRides;
        },
        enumerable: false,
        configurable: true
    });
    Ride.prototype.start = function () {
        // in crease the number of active rides
        Ride._activeRides++;
    };
    Ride.prototype.stop = function () {
        // in decrease the number of active rides
        Ride._activeRides--;
    };
    // define a property to keep track of active rides
    Ride._activeRides = 0;
    return Ride;
}());
// create 2 new instances of the Ride class
var ride1 = new Ride();
ride1.start();
var ride2 = new Ride();
ride2.start();
var ride3 = new Ride();
ride3.start();
var ride4 = new Ride();
ride4.start();
console.log(Ride.activeRides); // => 2
//   console.log(Ride.activeRides); // => 2
// so far so good, but there is an issue "we can alter the value of Ride.activeRides" anywhere in this code!
// to solve this use "private" access-modifier to make it private and define getter/setter methods to access it's value.
