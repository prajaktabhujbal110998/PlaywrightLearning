//Response Time SLA Analyzer
// As a performance tester, you collect API response times in milliseconds. Write a JavaScript program using a while loop 
// that analyzes an array of response times and prints a performance report with min, max, average, and how many responses breached
// the SLA threshold (> 500ms). Use comparison operators for min/max tracking.
//Input - responseTimes = [120, 230, 450, 510, 180, 620], SLA_LIMIT = 500
//Output - Total Requests: 6 Min Response: 120ms Max Response: 620ms SLA Breaches: 2 (33.33%) Overall Status: ❌ SLA VIOLATED

const responseTimes = [120, 230, 450, 510, 180, 620];
const SLA_LIMIT = 500;
let totalRequests = responseTimes.length;
let minResponse = responseTimes[0];
let maxResponse = responseTimes[0];
let slaBreaches = 0;
let index = 0;              

while (index < responseTimes.length) {
    const currentTime = responseTimes[index];
    
    if (currentTime < minResponse) {
        minResponse = currentTime;
    }
    
    if (currentTime > maxResponse) {
        maxResponse = currentTime;
    }
    
    if (currentTime > SLA_LIMIT) {
        slaBreaches++;
    }
    
    index++;
}

const breachPercentage = (slaBreaches / totalRequests) * 100;

console.log("Performance Report:"); 
console.log("Total Requests:", totalRequests);
console.log("Min Response:", minResponse + "ms");
console.log("Max Response:", maxResponse + "ms");
console.log("SLA Breaches:", slaBreaches, `(${breachPercentage.toFixed(2)}%)`); 
if (slaBreaches > 0) {
    console.log("Overall Status: ❌ SLA VIOLATED");
}   else {
    console.log("Overall Status: ✅ SLA MET");
}               
