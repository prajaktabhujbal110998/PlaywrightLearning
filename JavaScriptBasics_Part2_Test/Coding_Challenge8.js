//Test Environment Config
// In CI/CD pipelines, tests run against different environments. Write a JavaScript program using a switch statement that takes an environment name stored in a variable and prints the base URL, API key pattern, and timeout. Use const for fixed values and let for the assembled config.
// Environments: dev, staging, qa, production/prod. Each has different base URL, API key prefix, timeout, and description.
//Input - envName = "staging"
//Output - Environment: STAGING Base URL: https://staging-api.testingacademy.com API Key: stg_key_xxxx-xxxx Timeout: 8000ms Description: Staging - Pre-production mirror

let envName = "staging";

switch (envName) {
    case "dev":
        console.log("Dev Base URL: https://dev-api.testingacademy.com");
        console.log("API Key: dev_key_xxxx - xxxx");
        console.log("Timeout: 6000ms");
        console.log("Description: Development environment");
        break;
    case "staging":
        console.log("STAGING Base URL: https://staging-api.testingacademy.com");
        console.log("API Key: stg_key_xxxx - xxxx");
        console.log("Timeout: 8000ms");
        console.log("Description: Staging - Pre - production mirror");
        break;
    case "qa":
        console.log("QA Base URL: https://qa-api.testingacademy.com");
        console.log("API Key: qa_key_xxxx - xxxx");
        console.log("Timeout: 10000ms");
        console.log("Description: Quality Assurance environment");
        break;
    case "production/prod":
        console.log("PRODUCTION Base URL: https://prod-api.testingacademy.com");
        console.log("API Key: prod_key_xxxx - xxxx");
        console.log("Timeout: 12000ms");
        console.log("Description: Production environment");
        break;
    default:
        console.log("Please enter the valid environment name");
}
