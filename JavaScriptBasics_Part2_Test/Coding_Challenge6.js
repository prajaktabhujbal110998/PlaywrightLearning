//As a QA engineer, classify bugs based on two factors: frequency ("always", "often", "rarely") and impact ("blocker", "major", "minor"). Write a JavaScript program using nested if-else that prints the bug severity level.

// Classification Matrix:
// - always + blocker → P0 | always + major → P1 | always + minor → P2
// - often + blocker → P1 | often + major → P2 | often + minor → P3
// - rarely + blocker → P2 | rarely + major → P3 | rarely + minor → P4

BugReportTitle ="Checkout page crashes on applying coupon";
Frequency = "always";
Impact = "blocker";
let Severity;
let Action;

if(Frequency === "always" && Impact === "blocker") {
    Severity = "P0 - Critical";
    Action = "Stop release immediately";
} else if(Frequency === "always" && Impact === "major") {
    Severity = "P1 - Major";
    Action = "Fix before next sprint/release";
} else if(Frequency === "always" && Impact === "minor") {
    Severity = "P2 - Minor";
    Action = "Fix in upcoming release";
}

else if(Frequency === "often" && Impact === "blocker") {
    Severity = "P1 - Major";
    Action = "Fix before next sprint/release";
} else if(Frequency === "often" && Impact === "major") {
    Severity = "P2 - Minor";
    Action = "Fix in upcoming release";
} else if(Frequency === "often" && Impact === "minor") {
    Severity = "P3 - Low";
    Action = "Fix in future releases";
}

else if(Frequency === "rarely" && Impact === "blocker") {
    Severity = "P2 - Minor";
    Action = "Fix in upcoming release";
} else if(Frequency === "rarely" && Impact === "major") {
    Severity = "P3 - Low";
    Action = "Fix in future releases";
} else if(Frequency === "rarely" && Impact === "minor") {
    Severity = "P4 - Low";
    Action = "Optional fix";
}

else {
    Severity = "INVALID INPUT!";
    Action = "Please enter valid frequency and impact values.";
}

//Print the full bug report
console.log("Bug Report:",BugReportTitle);
console.log("Frequency:", Frequency);
console.log("Impact:", Impact);
console.log("Severity Level:", Severity);
console.log("Recommended Action:", Action);