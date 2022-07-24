//Problem:

// 1. In mathematics, the Fibonacci sequence or serie is the following infinite
// sequence of natural numbers:
// 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597 ...
// where f (0) = 0, f (1) = 1 and f (n) = f (n-1) + f (n-2).
// Code a program (in javascript or typescript) that solves for any
// number in the fibonacci series.

//Solved:

const getFibonacci = (limit) => {
    //by default the initial values of fibonacci sequence are: 0, 1
    const fibonacci = [0,1];

    for (let i = 2; i < limit; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    return console.log(fibonacci)
}

getFibonacci(3);