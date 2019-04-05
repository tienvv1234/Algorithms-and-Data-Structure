// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed;
    }, '');

}

reverse('abcd')

module.exports = reverse;


//solution 1
// let reversed = '';
//     for (let character of str) {
//         reversed = character + reversed;
//     }
//     console.log('reversed 1 :', reversed)
//     return reversed;