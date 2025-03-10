// Function to generate a random number between 1 and 50
function getRandomNumber() {
    return Math.floor(Math.random() * 50) + 1;
}

// Function to generate a random string of length 5
function getRandomString(length: number) {
    let result = "";
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Function to generate a random boolean value
function getRandomBoolean() {
    return Math.random() >= 0.5;
}

// Function to generate a random object with 3 properties
function getRandomObject() {
    const properties = ["name", "age", "gender"];
    const values = [getRandomString(5), getRandomNumber(), getRandomBoolean()];
    let result: any = {};
    for (let i = 0; i < properties.length; i++) {
        result[properties[i]] = values[i];
    }
    return result;
}
