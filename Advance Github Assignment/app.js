var input = document.querySelector("input");
var result = document.getElementById("result");

input.onkeyup = function () {
  var word = input.value;
  var reverse = "";

  for (var i = word.length - 1; i >= 0; i--) {
    reverse = reverse + word[i];
  }

  if (word === "") {
    result.innerHTML = "";
  } else if (word === reverse) {
    result.innerHTML = "Palindrome";
  } else {
    result.innerHTML = "Not Palindrome";
  }
};
