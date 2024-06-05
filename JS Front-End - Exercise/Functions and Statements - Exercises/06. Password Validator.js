function validator(string) {
    let pattern = /^[A-Za-z0-9]+$/;
    let counter = 0;

    if (string.length < 6 || string.length > 10) {
        console.log("Password must be between 6 and 10 characters")
        counter ++;
    } 
    
    if (!string.match(pattern)) {
        console.log("Password must consist only of letters and digits")
        counter ++;

    }

    if (!string.match(/\d{2,}/)) {
        console.log("Password must have at least 2 digits");
        counter ++;
    }
    
    if (counter == 0)
        console.log("Password is valid")
}
