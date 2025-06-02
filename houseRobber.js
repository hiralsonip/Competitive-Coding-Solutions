function rob(nums) {
    // WRITE YOUR BRILLIANT CODE HERE
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];

    // prev1 - max money that can be robbed up to the previous house
    // prev2 - max money that can be robbed up to the house before that
    // prev2 -> prev1 -> curr
    let prev1 = 0
    let prev2 = 0;

    for (const num of nums) {

        // money that can be robbed till this house
        const temp = prev1;

        // Either rob the current house (prev2 + num) or skip it(prev1)
        prev1 = Math.max(prev1, prev2 + num);

        prev2 = temp;
    }

    return prev1;
}

const nums = [2, 7, 9, 3, 1] // [1, 2, 3, 1];
console.log(rob(nums));