// imagine in a venue we want to know who is setting on which seat

class SeatAssignment {
  // A1, A2..  seat numbers
  // Mosh, John..  people setting on

  // if there is hundred or thousand seats, we are not going to define all of theme one by one.
  // like:
  // A1: "Mosh";
  // A2: "John"
  // instead use index-signature
  // [key:string]: valueType
  // Here, `[key: string]` is the index signature. It indicates that any property with a string key can exist on the object, and the associated value must be of type `valueType`.

  [seatNumber: string]: string; // seatNumber is the property-name and this property-key can only be a string and the last type-annotation says that the value allowed to be stored in this key can only be a string value 
}

const seats = new SeatAssignment()
seats.A1 = "Mosh"
seats.A2 = "Marry"
seats.A3 = "John"
// here we used "dot-notation" and we can also use "bracket-notation"
seats["A4"] = "Mostafa"
seats["A5"] = "Mat"

