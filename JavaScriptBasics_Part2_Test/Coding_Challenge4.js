// In UI automation (Cypress/Playwright), you often need to validate element states before interacting with them. Write a JavaScript program that checks an element's properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action a QA engineer should take. Use strict equality (===), logical operators (&&, ||), and the ternary operator for severity level.

// States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN (present but not displayed), NOT FOUND (not present).
// Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).
//output Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.


isPresent = true, isDisplayed = true, isEnabled = false

if(isPresent === true && isDisplayed === true && isEnabled === true){
console.log("States: Ready");
}
else if(isPresent === true && isDisplayed === true && isEnabled === false){
console.log("States:DISABLED")
}
else if(isPresent === true && isDisplayed === false){
console.log("States:HIDDEN")
}
console.log("Severity:", isPresent === false ? "CRITICAL" : (isDisplayed === false || isEnabled === false) ? "WARNING" : "OK");
console.log("Action:", isPresent === false ? "Element not found. Check locator or wait for element to appear." : (isDisplayed === false || isEnabled === false) ? "Element is visible but not in the desired state. Wait for the appropriate state or check preconditions." : "Element is ready for interaction.");