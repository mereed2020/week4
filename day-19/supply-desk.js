// One comparison intentionally disagrees with the stated rule.
const learnerCount = 7;
const kitCount = 7;
const deskIsOpen = true;

if (!deskIsOpen) {
  console.log("The desk is closed.");
} else if (kitCount > learnerCount) {
  console.log("Enough kits.");
} else {
  console.log("More kits needed.");
}


// When run as is says More kits needed
// When you change kitcount from 7 to 6 the result is the same
// if you change learnercount from 7 to 6 you get enough kits
// if you change kitcount from 7 to 8 and leaving learnercount at 7 you get same result as above. enough kits.
// if you change the deskisopen from true to false you get the desk is closed