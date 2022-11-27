//Question Number 1 : Grade Calculator
//Take Marks as Input
/*
1. Marks - More than or Equal 90 - Grade O
2. Marks - 80 to 89 - Grade A
3. Marks - 70 to 79 - Grade B
4. Marks - 60 to 69 - Grade C
5. Marks - 50 to 59 - Grade D
6. Marks - 40 to 49 - Grade E
7. Marks Less than 40 - Grade F
Check corner case:
if Marks <0 Show : Invalid Input
If Marks more than 100 Show : Invalid Input
Cant accept Floats and Strings
Hint: if-else Ladder and readlineSync.questionInt()
*/
var readlineSync = require('readline-sync');

var marks = readlineSync.questionInt("marks of student:");
if (marks >=90 && marks <=100);{
    console.log("grade o");
}
if(marks >=80 && marks <=89){
    console.log("grade A");
}
else if(marks >=70 && marks <=79){
    console.log("grade B");
}
else if(marks >=60 && marks <=69){
    console.log("grade C");
}
else if(marks >=50 && marks <=59){
    console.log("grade D");
}
else if(marks >=40 && marks <=49){
    console.log("grade E");
}
else if(marks <=40){
    console.log("grade F");
}
else if (marks <= 0){
    console.log("invalid");
}
if (marks > 100){
    console.log("invalid input")
}