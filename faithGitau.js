function isEven(num) {
  // Use modulo operator to check divisibility by 2
  if (num % 2 === 0) {
     return true;
  } else {
    return false;
  }
}

//Test cases
console.log(isEven(10));  //
 output: true
console.log(isEven(15)); //
 output: false
console.log(isEven(-8)); //
 ouput: true
