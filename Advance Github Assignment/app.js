// Write a Statemnet of Palindrom without using any method
// Create Pull reques then add your code
// Your Code Here 

let palindromWordsChecker = () => {
    let userWords = document.getElementById("user-input").value
    if (!userWords.trim()) {
        alert("please enter word")
        return;
    } else {
        for (let i = 0; i < userWords.length / 2; i++) {
            let reverseWord = userWords.length - 1 - i;
            if (userWords[i] !== userWords[reverseWord]) {
                alert(userWords + " is not a palindrom word")
                return;
            } else {
                alert(userWords + " is a palindrom word")
                return;
            }
        }
    }

}
let userWords = document.getElementById("user-input")
userWords.addEventListener("keydown",
    function enterKeyHandler(event) {
        if (event.key === "Enter") {
            palindromWordsChecker();
        }
    }
)