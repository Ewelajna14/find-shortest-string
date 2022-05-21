function findShortestString(arr) {
  let smallestNum = arr[0];
for(let i = 1; i < arr.length; i++) {
    if(arr[i].length < smallestNum.length) {
      smallestNum = arr[i];   
    }
  }
return smallestNum;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

console.time('test');
console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']))
console.timeEnd('test');






module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/* Input: ['aaa', 'a', 'bb', 'ccc']
  Output: 'a'

  */