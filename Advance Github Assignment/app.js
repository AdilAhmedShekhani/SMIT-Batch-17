function checkPalindrome() {
  var input = document.getElementById("inputField");
  var word = input.value;
  var resultDisplay = document.getElementById("result");

  if (word === "") {
    resultDisplay.textContent = "Please enter a word";
    resultDisplay.style.color = "red";
    return;
  }

  word = word.toLowerCase();

  var isPalindrome = true;
  var length = word.length;

  for (var i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    resultDisplay.textContent = '✓ "' + word + '" is a Palindrome!';
    resultDisplay.style.color = "green";
  } else {
    resultDisplay.textContent = '✗ "' + word + '" is NOT a Palindrome';
    resultDisplay.style.color = "red";
  }
}
