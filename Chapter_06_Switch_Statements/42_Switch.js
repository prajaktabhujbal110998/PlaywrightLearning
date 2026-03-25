// Switch Statement
//0-Sunday, 1-Monday, 2-Tuesday, 3-Wednesday, 4-Thursday, 5-Friday, 6-Saturday
let day = 5;
switch(day){
    case 0:
        console.log("Sunday-Rest Day");
        break;
    case 1:
        console.log("Monday-Sprint Planning");
        break;
    case 2:
        console.log("Tuesday-Development Day");
        break;
    case 3:
        console.log("Wednesday-Code Review");
        break;
    case 4:
        console.log("Thursday-Testing Day");
        break;
    case 5:
        console.log("Friday-Deployment and Release");
        break;
    case 6:
        console.log("Saturday-Rest Day");
        break;
    default:
        console.log("Invalid Day Value");
}