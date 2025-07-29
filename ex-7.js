function isPalindrome(string) {
  // Start coding here
  let reversename = string.split("").reverse().join("")
  if (string == reversename){
    return true
  }else{
    return false
  }
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false