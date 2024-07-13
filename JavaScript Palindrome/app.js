function checkPalindrome() {
    var getWord = document.getElementById("word").value;
    var newchar = getWord.toLowerCase();
    console.log(newchar);
 
    var palindrome = newchar.split("").reverse().join("");
    console.log(palindrome);
 
    var result = document.getElementById("result");
    if (newchar === palindrome) {
       result.innerHTML = "The word is a palindrome";
    } else {
       result.innerHTML = "The word is not a palindrome";
    }
}
