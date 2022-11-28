//switch case

/*switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/
var readlineSync = require('readline-sync');
var num1 = readlineSync.questionInt("enter any number 1");
var num2 = readlineSync.questionInt("enter any number 2");
//cli menu
console.log("------------------");
console.log("SIMPLE CALCULATOR FOR MATHS");
console.log('\t Press + for Addition \n\t Press - for Subraxtion \n\t Press * Multiple \n\t Press / for Division \n\t Press ** for Power');
console.log("------------------");
var symbol = readlineSync.question("enter what you need to perfect");
switch(symbol){
    case "+":
      //code for that think
      console.log(num1 + num2);
        break;
    case "-":
      console.log(num1 - num2);
      //code for minus
        break;
    case "*":
      console.log(num1 * num2);
        break;
    case "/":
        console.log(num1 / num2);
        break;
    case "**":
        console.log(num1 ** num2);
        break;        
    default:
        console.log("invalid input")
        break;
}

