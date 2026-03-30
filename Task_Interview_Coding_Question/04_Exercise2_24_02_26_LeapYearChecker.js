let Year = 2028;

if((Year % 4 ==0 && Year % 100 !=0) ||Year % 400 == 0 ){
    console.log("This is a Leap Year");
}
else {
    console.log("This is not a Leap Year");
}