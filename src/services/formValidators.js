export const validateEmail = (email) => {
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
        return 0;
        console.log("Valid Email Address");
    }
    else {
        console.log("Invalid Email Address");
        return 1;
    }
}

// 0: Too short
// 1: Too long
// 2: At least one lowercase
// 3: At least one uppercase
// 4: At least one number

export const validatePassword = (password) => {
    if (password.length < 8) {
        console.log("Error: Password must be at least 8 characters");
        return 0;
    }
    else if (password.length > 32) {
        console.log("Error: Password Must be lesser than 32 characters");
        return 1;
    }
    else if (password.search(/[a-z]/) < 0) {
        console.log("Error: Password must contain at least one lowercase letter");
        return 2;
    } 
    else if(password.search(/[A-Z]/) < 0) {
        console.log("Error: Password must contain at least one uppercase letter");
        return 3;
    } 
    else if(password.search(/[0-9]/) < 0) {
        console.log("Error: Password must contain at least one number");
        return 4;
    }
    else {
        console.log("Success!");
        return 5;
    }
}


validateEmail("aadeeshsharma13@gmail.com");