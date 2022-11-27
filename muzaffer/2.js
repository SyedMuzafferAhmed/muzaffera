/*Question 2:
Take and Input and Tell if a Number is a Perfect Square or Not
*/

var readlinesync =require('readline-sync');
console.clear()


var num = readlinesync.questionInt("enter any number");

var result = Number.isInteger(Math.sqrt(num))

console.log(result)
