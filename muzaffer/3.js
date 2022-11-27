/*Question 3:
Take a Number as Input and
a) Display Multiple of 3 if its a multiple of 3
b) Display Multiple of 5 if its a multiple of 5
c) Display Multiple of both 3 & 5 if its a multiple of both
Ex :
Input: 3 -> Multiple of 3
Input : 9 -> Multiple of 3
Input : 20 -> Multiple of 5
Input : 15 -> Multiple of 3 and 5
*/
var readlinesync =require('readline-sync');
var n = readlinesync.questionInt("enter the number '1'");

if (n%3 ==0){
    console.log("div by 3");
 } else if(n % 5 == 0) 
    console.log("Div by 5")
if  (n%3 ==0 && n%5 ==0) {
    console.log("div by 3 & 5");
} else {
    console.log("Divisible by Noone")
}

