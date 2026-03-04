let count = 42;
let negative = -100;
let zero = 0;

let h = 0xFF;
let color_hex = 0xFF0000;
console.log(color_hex);

let octal = 0o77;
let pi = 3.14159;

let million = 1e6;
let tiny = 1.5e-4;


//Single Quotes
let single = 'Hello, World!';
let withDouble = 'She said, "hi"';

//let name = 'It's a test';  // This will cause an error because of the single quote in It's


//Double Quotes
let double = "Hello, World!";
let withSingle = "It's a test";

//Template Literal
let name = "Prajakta";
let full_name = `Hi,${name} Bhujbal`;
console.log(full_name);



let math ='2+2=${2 + 2}';
console.log(math);

// I want to store path of the file.
let path = "C:\\Users\\prajakta.bhujbal\\file.txt";
//single slash is not allowed. We have to use double slash.
console.log(path);

//---> // => URLs
//--->\\ => File Paths


let address = "https://app.vwo.com/#login";
console.log(address);

//string literal edge cases
let empty = "";     //empty string (falsy!)
let space = " ";    //single space (truthy!)
let zero1 = "0";    //string zero (truthy!)


let isLoggedIn = true;
let haPermission = false;