const prompt= require("prompt-sync")();
let number =parseInt(prompt("Enter a single digit number:"));

if( number == 0 ){
console.log("Zero");
}
else if( number == 1 )
{
    console.log("one");
}
else if( number == 2 )
{
    console.log("Two");
}
else if( number == 3 )
{
    console.log("Three");
}

else if( number == 4 )
{
    console.log("Four");
}

else if( number == 5 )
{
    console.log("Five");
}
else if( number == 6 )
{
    console.log("Six");
}
else if( number == 7 )
{
    console.log("Seven");
}
else if( number == 8 )
{
    console.log("Eight");
}
else if( number == 9 ) 
{
    console.log("Nine");
}
else{
    console.log("Enter the valid value");
}
