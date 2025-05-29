function productOfArrayExceptSelf(nums) {
    // WRITE YOUR BRILLIANT CODE HERE
    let n = nums.length;
    let preProduct = Array(n).fill(1);
    let sufProduct = Array(n).fill(1);
    let res = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        preProduct[i] = nums[i - 1] * preProduct[i - 1];
    }
    for (let i = n - 2; i >= 0; i--) {
        sufProduct[i] = nums[i + 1] * sufProduct[i + 1];
    }
    for (let i = 0; i < n; i++) {
        res[i] = preProduct[i] * sufProduct[i]
    }
    return res;
}