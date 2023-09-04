function isPalindrome(word) {
  // Write your algorithm here
  let wordLength = word.length
  for(let i = 0; i < wordLength; i++){
    if(word[i] === word[wordLength - 1 - i]){
      return true
    } else {
      return false
    }
  }
}

/* 
  Add your pseudocode here
//Write function isPalindrome 
    //receives one argument, a string. 
    //function returns true if string is palindrome 
    //return false if it is not a palindrome.

/*
  Add written explanation of your solution here
  example of abba, wordLength = 4
  in a string array, always start index at 0, 
    therefore the last letter will always be one less than the length of the array
  word[0] = a, word[3] = a
  word[1] = b, word[2] = b
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
