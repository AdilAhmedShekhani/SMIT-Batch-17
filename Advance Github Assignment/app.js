function checkPalindrome() {
  var word = document.getElementById("wordInput").value;
  var arr = [word];
  var word2 = "";

  for (var i = arr[0].length - 1; i >= 0; i--) {
    word2 += arr[0][i];
  }

  if (arr[0] === word2) {
    document.getElementById("result").innerHTML =
      "Yes, " + arr[0] + " is a Palindrome";
  } else {
    document.getElementById("result").innerHTML =
      arr[0] + " is Not a Palindrome";
  }
}
