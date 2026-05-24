var text = prompt("Type a word or phrase to check if it is a palindrome or not")


var cleaned = text.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();

var ispalindrome = true;

for(i = 0; i < Math.floor(cleaned.length / 2); i++){
    if(cleaned[i] !== cleaned[cleaned.length -1 -i]){
        ispalindrome = false;
        break;
    }
}
if(cleaned.length === 0){

    document.write("Blank or invalid input — Write a correct word or phrase.")

} else if(ispalindrome){

    document.write(`"${text}"</br> This is a Palindrome.`);
}
else{

    document.write(`"${text}"</br> This is Not a Palindrome.`);
}