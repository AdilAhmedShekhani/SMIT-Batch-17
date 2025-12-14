// Write a Statemnet of Palindrom without using any method
// Create Pull reques then add your code
// Your Code Here 

function isPalindrome(str){
  let clean = str.toLowerCase();
  let reverse = clean.split("").reverse().join("");
  return clean === reverse;
}

console.log(isPalindrome("madam"));



