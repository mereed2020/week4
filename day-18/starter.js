const activityName = "Space observation"; // name of the activity
const capacity = 10; // maximum number of participants
let registered = 9; // number of registered participants // this issue was should be let not const
const seatsLeft = capacity - registered; // number of available seats
const hasSeats = seatsLeft > 0; // boolean indicating if there are available seats 

console.log(activityName);
if (hasSeats) {
  console.log("A seat is available.");
} else {
  console.log("The activity is full.");
}
