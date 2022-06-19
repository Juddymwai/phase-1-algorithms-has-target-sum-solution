function hasTargetSum(array, target) {
  // Write your algorithm here
  const presentItem= new Set(); 
  for (const item of array) {
    const difference = target - item;

    if (presentItem.has(difference)) return true;

  
    presentItem.add(item);
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  define an empty array
  use for of to iterate the array
  take the diiference beteween the item being iterated and the target
  use if to check comparison between the difference and an item in the array
  if the difference matches the item in the array return true, otherwise return false
  the itemshould be added to the the set after the if condition
*/

/*
  Add written explanation of your solution here
  the code first define a new empty set that would hold result afterwars
  the items of the array are iterated by use oof for of
  the code assign a variable to the differenece between an item in the array and the target
  it then uses if condition to check for comparison
  when the comparison is met, a true result is returned
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
