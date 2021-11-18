const prompt= require("prompt-sync")();
let number =parseInt(prompt("Enter the single digit number leaving zero"));
switch (number){
    case 1:      
    console.log("one");
    break;
  case 2:      
    console.log("two");
    break;
  case 3:      
    console.log("three");
    break;
  case 4:      
    console.log("four");
    break;
  case 5:      
    console.log("Five");
    break;
  case 6:     
    console.log("six");
    break;
  case 7:      
    console.log("Seven");
    break;
    case 8:      
    console.log("Eight");
    break;
    case 9:     
    console.log("Nine");
    break;
  default:    
    console.log("Invalid number ");
}