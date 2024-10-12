function isPalindrome(arr) {
    for (el of arr) {

        let reversedEl = el.toString().split("").reverse().join("")
        if (el == reversedEl) {
            console.log("true");
        } else {
            console.log("false")
        }
    }
}
