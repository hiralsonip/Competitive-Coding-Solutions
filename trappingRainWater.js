function trappingRainWater(elevations) {

    if (!elevations || elevations.length < 3) return 0;

    let left = 0;
    let right = elevations.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    let water = 0;

    while (left < right) {

        if (elevations[left] < elevations[right]) {
            if (elevations[left] >= leftMax) {
                leftMax = elevations[left]
            } else {
                water += leftMax - elevations[left];
            }
            left++;
        } else {
            if (elevations[right] >= rightMax) {
                rightMax = elevations[right]
            } else {
                water += rightMax - elevations[right]
            }
            right--;
        }

    }
    return water;
}

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
console.log(trappingRainWater(height));


function processData() {
    //const lines = input.trim().split("\n");
    // const n = parseInt(lines[1]);                     // Correctly parse the number of elements
    //let arr = lines[2].trim().split(" ").map(Number); // Convert input to number array

    let n = 7;
    let arr = [1, 2, 3, 4, 5, 6, 7]


    arr.sort((a, b) => a - b);

    const mid = Math.floor((n - 1) / 2);
    [arr[mid], arr[n - 1]] = [arr[n - 1], arr[mid]];   // Swap mid and last element

    let left = mid + 1;
    let right = n - 2;

    while (left <= right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }

    console.log(arr.join(" "));
}

processData()