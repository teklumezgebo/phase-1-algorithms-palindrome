function isPalindrome(word) {
  if (word.charAt(0) === word.charAt(word.length - 1)) {
    return true
  } else {
    return false
  }
}

/* 
  if the first character matches the last letter in the string 
  return true 
  if not then return false 
*/

/*
  if the string's first letter and last letter are the same then it should be a palendrome
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
