let  sum = 0;
console.log("the no. are :")
for (i=0,i<=4;i++;){
  array[i] =Math.floor(Math.random() * 10 +10);
  sum = sum + array[i] ;
  console.log(array[i]);
}
console.log(sum);
console.log("the avg of required numbers is :" + sum/5);
