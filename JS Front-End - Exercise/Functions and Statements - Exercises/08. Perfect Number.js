function perfectNumber(num) {
    let sum = 0;
    let i = 1;

    while(true) {
        sum += i;
        if (sum == num) {
            console.log("We have a perfect number!")
            break;
        }

        if (sum > num) {
            console.log("It's not so perfect.")
            break;
        }

        i ++;
    }
}
