let statusCode = 200 //APIs are working fine

if (statusCode === 200) {
  console.log("API is working fine");   
}else if(statusCode === 404) {
    console.log("API is not found");
}else{
    console.log("Not matching any status code");
}