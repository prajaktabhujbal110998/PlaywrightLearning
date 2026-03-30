//Login Brute-Force Detection
// Write a JavaScript program that simulates a login system with brute-force detection. The system should lock the account after 3 consecutive failed attempts. Use a do...while loop to process login attempts from an array. Demonstrate var (global counter), let (loop variables), and const (credentials and threshold). Validate using strict equality (===) and logical operators (&&).
//Input - Valid: admin@testingacademy.com / Test@1234 Attempts: [wrong, wrong, wrong, correct]
//Output - Attempt 1: ❌ FAILED - Strike 1/3 Attempt 2: ❌ FAILED - Strike 2/3 Attempt 3: ❌ FAILED - Strike 3/3 🚨 ACCOUNT LOCKED Attempt 4: 🔒 ACCOUNT LOCKED - Rejected

const VALID_EMAIL = "admin@testingacademy.com";
const VALID_PASSWORD = "Test@1234";
const MAX_ATTEMPTS = 3;
var attemptCounter = 0;
const loginAttempts = ["wrong", "wrong", "wrong", "correct"];
let index = 0;  
let accountLocked = false;

do {    
    if (accountLocked) {
        console.log(`Attempt ${index + 1}: 🔒 ACCOUNT LOCKED - Rejected`);
    }   else if (loginAttempts[index] === "correct") {
        console.log(`Attempt ${index + 1}: ✅ SUCCESS - Logged in`);
        break;
    } else {
        attemptCounter++;
        console.log(`Attempt ${index + 1}: ❌ FAILED - Strike ${attemptCounter}/${MAX_ATTEMPTS}`);
        if (attemptCounter >= MAX_ATTEMPTS) {
            accountLocked = true;
        }
    }
    index++;
} while (index < loginAttempts.length);         
