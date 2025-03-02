// //q1
// function getDate() {
//    let date = new Date();
//    return date
// }

// console.log(getDate());
// //q2
// function greeting(fName, lName) {
//    console.log(`Hi ${fName} ${lName} `);

// }
// greeting('Rayyan', 'Asrar')
// //q3
// function addTwoNums(num1, num2) {
//    let sum = num1 + num2
//    return sum
// }
// console.log(addTwoNums(2, 2));
// //q4
// function mathOperation(num1, operator, num2) {
//    let result;
//    if (operator === "+") {
//       result = num1 + num2
//    } else if (operator === "-") {
//       result = num1 - num2
//    } else if (operator === "*") {
//       result = num1 * num2
//    } else if (operator === "/") {
//       result = num1 / num2
//    }
//    return result
// }
// console.log(mathOperation(10, "/", 2));
// //q5
// function sqTwoNums(num) {
//    let sq = num * num
//    return sq
// }
// console.log(sqTwoNums(8));
// function counting(start, end) {
//    let result = "";
//    for (let i = start; i < end; i++) {
//       result += i
//    }
//    return result
// }

// console.log(counting(2, 10));
// //q8
// function calcHypo(base, perp) {
//    function calcSq(num) {
//       return num * num
//    }
//    let fBase = calcSq(base)
//    let fperp = calcSq(perp)
// let Hypo= Math.sqrt(fBase+fperp)
// return Hypo
// }
// console.log(calcHypo(5, 5));
// //q10
// function checkPalindrome(word){
//    let reversedWord="";
//    for(let i=word.length-1; i>=0;i--){
//         reversedWord+= word[i];        
//       }
//       // console.log(reversedWord);
//    if (reversedWord===word) {
//       console.log('the given word is palindrome');
      
//    } else {
//       console.log('the given word in not palindrome');
      
//    }
// }
// checkPalindrome("rayyan")
// //q11
let str="the quick brown fox"
let temporaryStorage="";
let permanentStorage="";
for (let i = 0; i <= str.length; i++) {
  let test= str[i]
  if (test===" "||test===""){
   
   permanentStorage+=test
   console.log(permanentStorage);
   
}
else{
   temporaryStorage+=test
   console.log(temporaryStorage);
}
}
