function getLabelTotal(kitCount, spareCount) {
  // This prints a total but fails to give that value back to the call site.
  console.log(kitCount + spareCount);
  return kitCount + spareCount; // return value is needed here other wise it would cause a error.
}

const labels = getLabelTotal(7, 2); // = 9
console.log("Labels to prepare:", labels);  // would normally show 9 but would result without return value undefined
console.log("If one more spare is needed:", labels + 1); // would total 10 but without return 
// value it would result NaN  not a number of code term
// 