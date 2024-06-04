function solve(arr) {
    let username = arr[0];
    let counter = 0;

    function reverseString(str) {
        return str.split('').reverse().join('');
    }
    let reversedUserrname = reverseString(username);

    for (item of arr.slice(1, )) {
        counter ++;
        if (item == reversedUserrname) {
            console.log(`User ${username} logged in.`);
            break;
        }

        if (counter === 4) {
            console.log(`User ${username} blocked!`)
            break;
        }

        console.log("Incorrect password. Try again.")
    }
}
