// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

module.exports = vowels;


// let count = 0;
//     const checker = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (checker.includes(char)) {
//             count++;
//         }
//     }

//     return count;

//regex

// /[]/ square braces --> when put in square pair of square braces, where essentially saying hey if this
// string contains any character that is inside of the square brackets right here then let us know
// /gi is 2 options
// - this g option will make sure that we don't stop at the first match that we find inside of string
// - this i option stand for case insensitive (to lower case) this i will automatically take care of cases for us
// (this will include both of lower and upper cases)