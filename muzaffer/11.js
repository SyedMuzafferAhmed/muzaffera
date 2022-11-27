/*Question 2:
Take and Input and Tell if a Number is a Perfect Square or Not
*/
var readlinesync =require('readline-sync');
console.clear()


var num = readlinesync.questionInt("enter any number");

var x = (num**(2/4))
if (x%1 ==0, 1){
    console.log("This is perfect square");
}
else {
    console.log("null")
}