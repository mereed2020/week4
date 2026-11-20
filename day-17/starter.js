const activityName = "Drawing practice";
const capacity = 16;
let registered = 9;
let seatsLeft = capacity - registered;

console.log(activityName); // shows the activity name drawing practive
console.log("Before:", seatsLeft); // should show Before:, 7
registered = registered + 2; // should = 9 + 2 which = 11
console.log("Registered:", registered); // should show "Registered: 7"
seatsLeft = capacity - registered; // should = 16 - 11 which = 5
console.log("After:", seatsLeft); // should show After: 5
