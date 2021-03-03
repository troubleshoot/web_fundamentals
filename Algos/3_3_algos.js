// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?

// Challenge 1
// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).
function rollOne(){
  return Math.floor(Math.random() * 6) + 1;
}
// console.log(rollOne());

// Challenge 2
// Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' 
// times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print 
// the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”
function playFives(num){
  for(var i = 1; i <= num; i++){
    var rolled = rollOne();
    console.log(rolled);
    if(rolled == 5)
      console.log("That's good luck!");
  }
}
// console.log(playFives(4));

// Challenge 3
// Third, create a new function named playStatistics(), which should call rollOne() eight times 
// (but not print anything after each call). After the last of these eight calls, it should print 
// out the lowest and highest values that it received from rollOne, among those eight calls.
function playStatistics(){
  for(var i = 1; i <= 8; i++){
    var rolled = rollOne();
    if(i == 1){
      var lowest = rolled;
      var highest = rolled;
    }
    if(rolled < lowest)
      lowest = rolled;
    if(rolled > highest)
      highest = rolled;
  }
  console.log("Lowest Roll: " + lowest);
  console.log("Highest Roll: " + highest);
}
console.log(playStatistics());