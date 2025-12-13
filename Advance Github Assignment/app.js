const input = document.getElementById('textInput');
const button = document.getElementById('checkBtn');
const result = document.getElementById('result');

button.addEventListener('click', () => {
  let text = input.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
  if (text === "") {
    result.textContent = "Please enter something!";
    result.style.color = "#ffd700";
    return;
  }

  let reversed = text.split('').reverse().join('');
  if (text === reversed) {
    result.textContent = `"${input.value}" is a Palindrome! 🎉`;
    result.style.color = "#00ff99";
  } else {
    result.textContent = `"${input.value}" is NOT a Palindrome ❌`;
    result.style.color = "#ff4d6d";
  }
});
