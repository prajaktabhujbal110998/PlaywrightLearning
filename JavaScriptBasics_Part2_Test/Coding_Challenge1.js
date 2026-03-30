//API Response Status Code Validator
// As an SDET, you receive an API response status code and need to classify it. Write a JavaScript program using a switch statement that takes an HTTP status code stored in a variable and prints the category and a QA-friendly message.

// - 200 → "PASS - OK: Request successful"
// - 201 → "PASS - Created: Resource created successfully"
// - 301 → "WARNING - Moved Permanently: URL has changed"
// - 400 → "FAIL - Bad Request: Check request payload"
// - 401 → "FAIL - Unauthorized: Check auth token"
// - 403 → "FAIL - Forbidden: Insufficient permissions"
// - 404 → "FAIL - Not Found: Check endpoint URL"
// - 500 → "FAIL - Internal Server Error: Backend issue"
// - Any other → "UNKNOWN - Unhandled status code"

StatusCode = 301;
if (StatusCode === 200) {
    console.log("StatusCode:", StatusCode, "Result:", "PASS - OK: Request successful");
} else if (StatusCode === 201) {
    console.log("StatusCode:", StatusCode,"Result:", "PASS - Created: Resource created successfully");
} else if (StatusCode === 301) {
    console.log("StatusCode:", StatusCode, "Result:", "WARNING - Moved Permanently: URL has changed");
}  else if (StatusCode === 400) {
    console.log("StatusCode:", StatusCode, "Result:", "FAIL - Bad Request: Check request payload");
} else if (StatusCode === 401) {
    console.log("StatusCode:", StatusCode, "Result:", "FAIL - Unauthorized: Check auth token");
} else if (StatusCode === 403) {
    console.log("StatusCode:", StatusCode, "Result:", "FAIL - Forbidden: Insufficient permissions");
} else if (StatusCode === 404) {
    console.log("StatusCode:", StatusCode, "Result:", "FAIL - Not Found: Check endpoint URL");
} else if (StatusCode === 500) {
    console.log("StatusCode:", StatusCode, "Result:", "FAIL - Internal Server Error: Backend issue");
}