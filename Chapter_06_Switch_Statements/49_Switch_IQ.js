// switch(x){
//     case a: let b = 1;
//     break;
//     case a: let b = 1;   //Duplicate let not allowed 
//     break;
// }

let x = 10;
switch(x) {
    case 10:
        let b1 = 1;
        console.log(b1);
        break;
    case 10:
        let b2 = 12;
        console.log(b2);
        break;
        default:
        console.log("d");  //case 10 ---> duplicate - allowed in JS not in JAVA
        // default:
        //     console.log("d");  //multiple default are also not allowed
        //It will allow you to have the duplicate case with first as the usage
}