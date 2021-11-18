const prompt= require("prompt-sync")();
let year =parseInt(prompt("Enter year in YYYY format : "));

if(( year % 4 == 0 && year % 100 !=0 || year % 400 == 0)){
    console.log("Its a leap year");
}
else{
    console.log("Its not a leap year")
}