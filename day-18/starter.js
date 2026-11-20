const activityName = "Space observation"; // name of the activity
const capacity = 10; // maximum number of participants
const registered = 9; // number of registered participants
const seatsLeft = capacity - registered; // number of available seats left
const hasSeats = seatsLeft > 0; // orginal code was == statement which ment it was suppose to = 0 which was incorrect. it needed to be a boolean
console.log(activityName);
if (hasSeats) {
  console.log("A seat is available.");
} else {
  console.log("The activity is full.");
}
