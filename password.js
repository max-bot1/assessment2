const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`Welcome to the password validator tool. Please enter a password that you would like to validate.`, function saveInput(password) {
    let checkForNum = password.match(/\d+/g);
    if(password.length >= 10 && checkForNum != null && password.charAt(0) === password.charAt(0).toUpperCase()){
            console.log(`Password successfully validated.`)
            } else {
                console.log(`Password failed to be validated. Password must contain at least 10 digits, at least one number and at least one upper case letter.`)
            }
  rl.close();
});

rl.on("close", function saveInput() {
    console.log("\nThank you for using Password Validator.");
    process.exit(0);
})

