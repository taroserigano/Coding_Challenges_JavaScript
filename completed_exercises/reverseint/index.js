// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
// function reverseInt(n) {
     
    
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('')

// //   return parseInt(reversed) * Math.sign(n);
//     // if(n < 0) reversed * -1
//     return (n<0) ? -1 * reversed : reversed

// }


function rev(n) {
  const reversed = parseInt(String(n).split('').reverse().join('')); // turn a number into a string, then turn it into an array to reverse. 
  return (n < 0) ? -reversed : reversed
  
  // Math.sign(n) * parseInt(reversed); // Math.sign will return -1 as for negative number, 1 as for position number, 0 as for zero.
}

console.log(rev(1511))


var reverse = function (num) {

    const n = parseInt(
        num.toString().split('').reverse().join('')
    );

    return num < 0 ? -Math.abs(n) : n;
};

console.log(reverse(-1233));

console.log(Math.sign(-123))







const pal = (num) => { 

let n = Math.abs(num) 
let rev = 0 

console.log(n) 

while(n !== 0){ 
    let reminder = n % 10 
    rev = rev*10 + reminder 
    n = Math.floor(n / 10)
} 

return rev * Math.sign(num)

} 


console.log(pal(-1234))
