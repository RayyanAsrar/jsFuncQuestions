//q1
function getDate() {
    let date = new Date();
   return date 
  }
  
console.log(getDate());
//q2
function greeting(fName,lName){
console.log(`Hi ${fName} ${lName} `);

}
greeting('Rayyan','Asrar') 
//q3
function addTwoNums(num1,num2){
let sum= num1 + num2
return sum
}
console.log(addTwoNums(2,2));
//q4
function mathOperation(num1,operator,num2){
 let result;
 if (operator==="+") {
    result= num1 + num2
 }else if (operator==="-") {
    result= num1 - num2
 }else if (operator==="*") {
    result= num1 * num2
 }else if (operator==="/") {
    result= num1 / num2
 }
 return result
}
console.log(mathOperation(10,"/",2));   
//q5
function sqTwoNums(num){
     let sq= num * num
    return sq
    }
    console.log(sqTwoNums(8));
function counting(start,end){
let result="";
    for (let i = start; i < end; i++) {
          result += i 
        }
        return result
    }

console.log(counting(2,10));
