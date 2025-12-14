const textInput = document.getElementById('textInput');
const resultContainer = document.getElementById('resultContainer');
const resultText = document.getElementById('resultText');

const INITIAL_CONTAINER_CLASS = 'result-initial-container';
const INITIAL_TEXT_CLASS = 'result-initial-text';
const SUCCESS_CONTAINER_CLASS = 'result-success-container';
const SUCCESS_TEXT_CLASS = 'result-success-text';
const ERROR_CONTAINER_CLASS = 'result-error-container';
const ERROR_TEXT_CLASS = 'result-error-text';
const ALL_CONTAINER_CLASSES = [INITIAL_CONTAINER_CLASS, SUCCESS_CONTAINER_CLASS, ERROR_CONTAINER_CLASS];
const ALL_TEXT_CLASSES = [INITIAL_TEXT_CLASS, SUCCESS_TEXT_CLASS, ERROR_TEXT_CLASS];
// ======================================================================================================
// ======================================================================================================
// ======================================================================================================


function resetClasses() {
    resultContainer.classList.remove(...ALL_CONTAINER_CLASSES);
    resultText.classList.remove(...ALL_TEXT_CLASSES);
}

function cleanString(str) {
    return str.toLowerCase();
}

function checkPalindrome() {
    const input = textInput.value.trim();
    const cleaned = cleanString(input);

    resetClasses();

    if (input === "") {
        resultContainer.classList.add(INITIAL_CONTAINER_CLASS);
        resultText.textContent = 'Type something to begin checking.';
        resultText.classList.add(INITIAL_TEXT_CLASS);
        return;
    }


    const reversed = cleaned.split('').reverse().join('');
    const isPalindrome = (cleaned === reversed && cleaned.length > 0);

    if (isPalindrome) {
        resultContainer.classList.add(SUCCESS_CONTAINER_CLASS);
        resultText.textContent = `"${input}" is a Palindrome!`;
        resultText.classList.add(SUCCESS_TEXT_CLASS);
    } else {
        resultContainer.classList.add(ERROR_CONTAINER_CLASS);
        resultText.textContent = `"${input}" is NOT a Palindrome.`;
        resultText.classList.add(ERROR_TEXT_CLASS);
    }
}
