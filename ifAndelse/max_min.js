let number1=Math.floor(Math.random()*900 + 100);
let number2=Math.floor(Math.random()*900 + 100);
let number3=Math.floor(Math.random()*900 + 100);
let number4=Math.floor(Math.random()*900 + 100);
let number5=Math.floor(Math.random()*900 + 100);
console.log(number1,number2,number3,number4,number5);

let min_number = number1;
let max_number = number5;

if (number1>max_number){
    max_number=number1;
}

if (number2>max_number){
    max_number=number2;
}

if (number2<min_number){
    min_number=number2;
}

if (number3>max_number){
    max_number=number3;
}

if (number3<min_number){
    min_number=number3;
}

if (number4>max_number){
    max_number=number4;
}

if (number4<min_number){
    min_number=number4;
}

if (number5<min_number){
    min_number=number5;
}

console.log("the value of min number is :"+ min_number +"\n" +"the value of max_num is :"+max_number);