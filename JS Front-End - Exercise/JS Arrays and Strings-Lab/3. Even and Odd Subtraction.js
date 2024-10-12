function solve(nums) {
    let evenSum = 0;
    let oddSum = 0;

    for (let num of nums) {
        if (num % 2 === 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }
    }

    return evenSum - oddSum;
}


// function solve(nums) {
//     let evenSum = 0;
//     let oddSum = 0;

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             evenSum += nums[i]
//         } else {
//             oddSum += nums[i];            
//         }
//     }

//     return evenSum - oddSum;
// }
