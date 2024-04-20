function calculateFactorial(n) {
    if (n <= 0) {
        console.log(`The factorial of ${n} is 1, since the input number is zero or negative.`);
        return 1;
    }
    
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    
    console.log(`The factorial of ${n} is ${factorial}. It is the product of all integers from 1 to ${n}.`);
    return factorial;
}

calculateFactorial(5); 