/*
Reverse the order of words in a given sentence (a string of words).
I/P - Hello World
o/p - World Hello

*/

function reverseWords(sentence) {
    const separated_sentence = sentence.split(" ");
    const result = [];
    for (let i = separated_sentence.length - 1; i >= 0; i--) {
        result.push(separated_sentence[i]);
    }
    const result_sentence = result.join(" ");
    return result_sentence;
}

const sen = reverseWords("Hello World Hiral Soni");
console.log(sen);