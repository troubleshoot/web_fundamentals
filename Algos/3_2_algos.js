// "CHALLENGE" 1
// Push a value into an array
// Given: var arr = [1,2,3,4], push in the value 5 and console.log the modified array [1,2,3,4,5]
// Notice how with the built in push method, the value is always added to the back

// var arr = [1,2,3,4];
// arr.push(5);
// console.log(arr);

// CHALLENGE 2
// Given an array and a value, push the new value to the FRONT of the array -- remember 
// that the built in push function adds to the back!! So how can you add a value to the 
// FRONT of an array?
// Given: var arr = [2,3,4,5] and the value var num = 1, return an array => [1,2,3,4,5] 
// which has the new value pushed into the front of the array

// var arr = [2,3,4,5];
// var temp = 0;
// arr.push(1);
// for(var i = arr.length - 2; i >= 0; i--){
//   var temp = arr[i];
//   arr[i] = arr[i + 1];
//   arr[i + 1] = temp;
// }
// console.log(arr);