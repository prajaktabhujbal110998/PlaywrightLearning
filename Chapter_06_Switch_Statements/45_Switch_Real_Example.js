//You are working API Validation
//Response Code - 200, 404, 401, 403,...404

let responseCode = 404;
switch(responseCode){
    case 200:
        console.log("200 Ok");
        break;  
    case 404:
        console.log("404 Not Found");
        break;  
        default:              //is not mandatory but good to have
        console.log("Unknown Response Code");
}