//codewars class 35 9-22-23

// task
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// my code


function squareDigits(num){
    let stringNums = num.toString();
    let results = [];
    for (let i = 0; i < stringNums.length; i++){
        results[i] = stringNums[i] * stringNums[i];
    }
    return Number(results.join(''));
};