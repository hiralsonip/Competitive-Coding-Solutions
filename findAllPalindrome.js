/*

Given a string find all non-single letter substrings that are palindromes. For instance: aabbbaa

*/

function findPalindrome(sentence) {
    const palindrome = new Set();

    function checkPalindrome(s) {
        return s === s.split("").reverse().join("");
    }

    for (let i = 0; i < sentence.length; i++) {
        for (let j = i + 1; j < sentence.length + 1; j++) {
            const substring = sentence.slice(i, j);
            if (substring.length > 0 && checkPalindrome(substring)) {
                palindrome.add(substring);
            }
        }
    }
    return Array.from(palindrome);
}

const result = findPalindrome("ababa");
console.log(result);

