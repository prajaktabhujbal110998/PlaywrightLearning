// Switch Statement
//0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday
let day = 2;
switch(day){
    case 0:
        console.log("Sunday-Rest Day");
    case 1:
        console.log("Monday-Sprint Planning");
    case 2:
        console.log("Tuesday-Development Day");
    case 3:
        console.log("Wednesday-Code Review");
    case 4:
        console.log("Thursday-Testing Day");
    case 5:
        console.log("Friday-Deployment and Release");
    case 6:
        console.log("Saturday-Rest Day");
    default:
        console.log("Invalid Day Value");
}