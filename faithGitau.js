function reverseString(str) {
  // 1. Split the string into an array of characters.
  const charArray = str.split('');
  
  // 2. Reverse the array of characters.
  const reversedArray = charArray.reverse();
  
  // 3. Join the characters back into a string.
  const reversedString = reversedArray.join('');
  
  // 4. Return the reversed string.
  return reversedString;
  
  // Alternative one-line solution:
  // return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello")); // Expected output: "olleh"
console.log(reverseString("12345")); // Expected output: "54321"
console.log(reverseString("")); // Expected output: "" (empty string remains empty)
console.log(reverseString("JavaScript")); // Expected output: "tpircSavaJ"
