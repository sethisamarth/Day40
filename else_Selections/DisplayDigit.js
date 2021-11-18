const prompt= require("prompt-sync")();
let number = parseInt(prompt("Enter a number from 1,10,100,1000,10000:"));

if(number ==1){
    console.log("unit");
}
if(number ==10){
    console.log("ten");
}
if(number ==100){
    console.log("hundred");
}
if(number ==1000){
    console.log("thousand");
}
if(number ==10000){
    console.log("ten thousand");
}
else{
    console.log("Enter a valid no.");
}