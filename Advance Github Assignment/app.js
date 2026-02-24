// Write a Statemnet of Palindrom without using any method
// Create Pull reques then add your code
// Your Code Here 

let input = document.querySelector("input");

input.addEventListener("keyup", function () {

    let original = input.value;
    let reverse = "";

    for (let i = original.length - 1; i >= 0; i--) {
        reverse += original[i];
    }

    if (original === reverse && original !== "") {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }

});