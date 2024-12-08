//The task is: if anyone use this calculator, it will show wrong answer approximately 10% times.

let i = prompt("Enter a number")
console.log(i);

let obj = prompt("Enter +,-,* or / ")

let _i = prompt("Enter second number")
console.log(_i);

if (i< 10 || _i< 10) {
   alert(i + obj + _i)
} else if (isNaN(i) || isNaN(_i)) {
         //throw SyntaxError("Sorry this is not a number")
         alert("Sorry Enter valid number and oparetor")
}else{
    alert(eval(i + obj + _i))
}
