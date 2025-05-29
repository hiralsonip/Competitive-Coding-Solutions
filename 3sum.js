function tripletsWithSum0(nums) {
    // WRITE YOUR BRILLIANT CODE HERE
    let res = new Set();
    let map = new Map();

    for (let j = 0; j < nums.length; j++) {
        for (let k = j + 1; k < nums.length; k++) {
            const thirdVal = -1 * (nums[j] + nums[k])
            // If such indices exist
            if (map.has(thirdVal)) {
                for (let i of map.get(thirdVal)) {
                    if (i < j) {
                        const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
                        res.add(triplet.toString());
                    }
                }
            }
        }

        if (!map.has(nums[j])) {
            map.set(nums[j], []);
        }
        map.get(nums[j]).push(j);
    }
    return Array.from(res).map(str => str.split(","));
}

const nums = [-1, 0, 1, 2, -1, -4];
console.log(tripletsWithSum0(nums));