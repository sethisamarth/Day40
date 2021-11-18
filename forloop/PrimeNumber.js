const prompt= require("prompt-sync")();
let n =parseInt(prompt("Enter value of n"));
var flag =0;
for (let i = 0; i < n; i++) {
   
    if(n%i == 0){
        flag = 1;
        console.log("its not a prime number");
        break;
    }
}
    if(flag != 1){
        console.log("its is a prime number");
    }
  