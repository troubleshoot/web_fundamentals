// Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
// for(var i = 1; i <= 255; i++){
//   console.log(i);
// }

// Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
// var sum = 0;
// for(var i = 1; i <= 1000; i++){
//   if(i % 2 == 0)
//     sum = i + sum;
// }
// console.log(sum);

// Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
// var sum = 0;
// for(var i = 1; i <= 5000; i++){
//   if(i % 2 != 0)
//     sum = i + sum;
// }
// console.log(sum);

// Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
// function returnSum(arr){
//   var sum = 0;
//   for(var i = 0; i < arr.length; i++){
//     sum = arr[i] + sum;
//   }
//   return sum;
// }
// console.log(returnSum([-5,2,5,12]));

// Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
// function findMax(arr){
//   var max = arr[0];
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] > max)
//       max = arr[i];
//   }
//   return max;
// }
// console.log(findMax([-3,3,5,7]));

// Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
// function findAverage(arr){
//   var avg = 0;
//   for(var i = 0; i < arr.length; i++){
//     avg = arr[i] + avg;
//   }
//   return avg/i;
// }
// console.log(findAverage([1,3,5,7,20]));

// Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
// function arrayOdd(){
//   var oddArray = [];
//   for(var i = 1; i <= 50; i++){
//     if(i % 2 != 0)
//       oddArray.push(i);
//   }
//   return oddArray;
// }
// console.log(arrayOdd());

// Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
// function greaterThanY(arr, Y) {
//   var temp = 0;
//   arr.forEach(function(elem){
//       if (elem>Y){
//           temp = temp + 1;
//       }
//   });
//   return temp; 
// }
// console.log(greaterThanY([1, 3, 5, 7], 3));

// Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
// function squares(arr){
//   for(var i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * arr[i];
//   }
//   return arr;
// }
// console.log(squares([1,5,10,-2]));

// Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
// function negatives(arr){
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] < 0)
//       arr[i] = 0;
//   }
//   return arr;
// }
// console.log(negatives([1,5,10,-2]));

// Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
// function maxMinAvg(arr) {
//   var min = arr[0];
//   var max = arr[0];
//   var avg = 0;
//   for(var i = 0; i <= arr.length-1; i++){
//       avg = arr[i] + avg;
//       if(arr[i] < min)
//           min = arr[i];
//       if(arr[i] > max)
//           max = arr[i];
//       if(i == arr.length - 1){
//           avg = avg /(i + 1);
//       }
//   }
//   var arrNew = [max, min, avg]
//   return arrNew; 
// }
// console.log(maxMinAvg([1,5,10,-2]));

// Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
// function swap(arr) {
//   var temp = arr[0];
//   arr[0] = arr[arr.length - 1];
//   arr[arr.length - 1] = temp;
//   return arr; 
// }
// console.log(swap([1,5,10,-2]));


// Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
// function negatives(arr){
//   for(var i = 0; i < arr.length; i++){
//     if(arr[i] < 0)
//       arr[i] = "Dojo";
//   }
//   return arr;
// }
// console.log(negatives([-1,-3,2]));