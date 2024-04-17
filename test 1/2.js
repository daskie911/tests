function findPairs(secret) {
    for (let i = 0; i <= secret; i++) {
        console.log(i + " + " + (secret - i) + " = " + secret);
    }
}

findPairs(100);
