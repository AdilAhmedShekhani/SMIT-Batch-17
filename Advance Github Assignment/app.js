// Write a Statemnet of Palindrom without using any method
// Create Pull reques then add your code
// Your Code Here 


function checkPalindrome(){
var str=document.getElementById("word").value;;
var isPalindrome=true;
var len=0;
while(  str[len]!==undefined){

len++;
}
for(var i=0; i<len/2; i++){
    if(str[i]!==str[len-1-i]){
        isPalindrome=false;
        break;
    }
}
if(isPalindrome){
 document.getElementById("result").innerText = str + " is a palindrome";
}   
else{
document.getElementById("result").innerText = str + " is a  not palindrome";
}
}