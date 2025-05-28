"use strict";

const s = "abcdbea"
function longestSubstringWithoutRepeatingCharacters(s) {
    // SOLUTION - 1

    // let left = 0;
    // let result = 0;
    // let tempSubString = "";

    // for (let right = 0; right < s.length; right++) {
    //     let element = s[right];
    //     while (tempSubString.length > 0 && tempSubString.includes(element)) {
    //         left++;
    //         console.log(left, right);
    //         tempSubString = s.substring(left, right);
    //         console.log("Inner - ", tempSubString);
    //     }
    //     if (!tempSubString.includes(element)) {
    //         tempSubString = tempSubString + element;
    //     }
    //     console.log("Outer - ", tempSubString);
    //     result = Math.max(result, tempSubString.length)
    // }


    // SOLUTION - 2
    let left = 0;
    let result = 0;
    let charSet = new Set();

    for (let right = 0; right < s.length; right++) {
        let element = s[right];
        while (charSet.has(element)) {
            charSet.delete(s[left]);
            left++;
        }
        charSet.add(element);
        result = Math.max(result, right - left + 1)
    }
    return result;
}

const res = longestSubstringWithoutRepeatingCharacters(s);
console.log(res);

