//Mini Test Suite Runner
// Build a mini test suite runner that executes test cases and generates a summary report. This question combines ALL topics: var/let/const, if-else, switch, for loop, while loop, do...while, operators (===, !==, &&, ||, ??, ternary), typeof checks, and identifiers.
// Each test case has a name, expected value, actual value, and comparison type (strictEqual, looseEqual, typeCheck, truthy, lessThan). Run all tests, track pass/fail/error counts, find consecutive passes from start (while loop), find first failure (do...while), and print a comprehensive report.



// Define test cases
const tests = [
    { name: "5 === 5", expected: 5, actual: 5 },
    { name: "'5' == 5", expected: 5, actual: '5' },
    { name: "3 < 5", expected: true, actual: 3 < 5 },
    { name: "true is truthy", expected: true, actual: true },
    { name: "Failure example", expected: 10, actual: 20 }
];

//Adding comment