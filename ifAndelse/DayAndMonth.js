
const prompt= require("prompt-sync")();

let day=parseInt(prompt("Enter day: "));
let month=parseInt(prompt("Enter Month: "));

if ( month >= 3 && month <= 6){
    if(month == 3 && day <= 20 || month == 6 && day >= 2){
        console.log("False");
    }
    else{
        console.log("True")
    }
}
else{
    console.log("False");
}