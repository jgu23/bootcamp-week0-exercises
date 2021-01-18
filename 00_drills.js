// Feel free to look things up online!

// How to read the syntax:

// const functionName = (inputs) => {
//   **body of the function**
//   return (output)
// };

// SYNTAX NOTE: on a function with one parameter (input) the parenthesis are omitted

// TODO - write a function which reverses the string
const reverse = (str) => {

  let newStr = "";

  for (let i = str.length; i > 0; i--) {
    newStr += str[i - 1];
  }

  return newStr;

}

// TODO - write a function which returns the factorial of a positive integer
const factorial = (num) => {

  if (num <= 1) {
    return 1;
  }

  return factorial(num - 1) * num;

}

// TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
// if the two arrays are of unequal length
// Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
const zip = (arr1, arr2) => {

  if (arr1.length != arr2.length) {
    return -1;
  }

  const newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    newArr.push([arr1[i], arr2[i]]);
  }

  return newArr;

}

// TODO - Write a function which does the opposite of `zip()`
const unzip = (arr) => {

  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr1.push(arr[i][0]);
    arr2.push(arr[i][1]);
  }

  return [arr1, arr2];

}

// TODO - write a function which shifts a string `num` characters to the right
// Example = shiftThree("Hello") === "lloHe"
const shiftRight = (str, num) => {

  const i = str.length - num % str.length;

  return str.substring(i) + str.substring(0, i);

}

// CHALLENGE - write a function which returns the current date in the following string format:
// "Today's date is January 7th, 2016. It is 11:37 in the morning."
const announceDate = () => {

  const d = new Date();

  let month = "";
  switch (d.getMonth()) {
    case 0:
      month = "January";
      break;
    case 1:
      month = "February";
      break;
    case 2:
      month = "March";
      break;
    case 3:
      month = "April";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 9:
      month = "October";
      break;
    case 10:
      month = "November";
      break;
    case 11:
      month = "December";
      break;
  }

  let suffix = "";
  switch (d.getDate()) {
    case 1:
    case 21:
    case 31:
      suffix = "st"; 
      break;
    case 2:
    case 22:
      suffix = "nd";
      break;
    case 3: 
    case 23:
      suffix = "rd";
      break;
    default:
      suffix = "th";
      break;
  }

  let mornOrEve = "";
  const h = d.getHours()
  if (h < 6) { 
    mornOrEve = "in the night.";
  }
  else if (h < 12) {
    mornOrEve = "in the morning.";
  }
  else if (h < 18) {
    mornOrEve = "in the afternoon.";
  }
  else {
    mornOrEve = "in the evening.";
  }

  let hourAdjusted = d.getHours() % 12;
  if (hourAdjusted == 0) {
    hourAdjusted = 12;
  }

  return `Today's date is ${month} ${d.getDate()}${suffix}, ${d.getFullYear()}. It is ${hourAdjusted}:${d.getMinutes()} ${mornOrEve}`;
  
}

module.exports = {
  reverse,
  factorial,
  zip,
  unzip,
  shiftRight,
  announceDate,
}
