// 7. Check whether given string is palindrome or not.

let str = 'ollo';
let revStr = str.split('').reverse().join('');

if(revStr === str) {
    console.log('Palindrome String');
} else {
    console.log('Not a Palindrome String');
}