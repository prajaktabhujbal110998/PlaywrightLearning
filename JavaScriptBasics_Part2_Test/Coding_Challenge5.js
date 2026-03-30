//As an SDET, you frequently need to generate test data for form testing. Write a JavaScript program that generates test user data using a for loop. Each user should have a unique ID (USR-0001 format), name, email, and role (cycling through: admin, editor, viewer, tester, manager). Every 3rd user should be inactive (edge case testing). Demonstrate proper use of var (global counter), let (loop variables), and const (fixed values).
//Generate 8 users

const ROLES = ['admin', 'editor', 'viewer', 'tester', 'manager'];
const TOTAL_USERS = 8;
var userCounter = 1;

for (let i = 0; i < TOTAL_USERS; i++) {
    let role = ROLES[i % ROLES.length];
    let isActive = (i + 1) % 3 !== 0;
    let userId = `USR-${String(userCounter).padStart(4, '0')}`;
    let name = `User ${userCounter}`;
    let email = `user${userCounter}@example.com`;

    console.log(`User ID: ${userId}, Name: ${name}, Email: ${email}, Role: ${role}, Active: ${isActive}`);

    userCounter++;
}