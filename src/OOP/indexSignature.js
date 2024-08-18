// imagine in a venue we want to know who is setting on which seat
var SeatAssignment = /** @class */ (function () {
    function SeatAssignment() {
    }
    return SeatAssignment;
}());
var seats = new SeatAssignment();
seats.A1 = "Mosh";
seats.A2 = "Marry";
seats.A3 = "John";
// here we used "dot-notation" and we can also use "bracket-notation"
seats["A4"] = "Mostafa";
seats["A5"] = "Mat";
var x = {};
x[1] = "first value";
console.log(x);
