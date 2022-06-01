function isPrime(n) {
    for (let j = 2; j < n; j++) {
        if (n % j == 0) return false
    }
    return true
}
allPrime = []
for (let i = 100; i < 999; i++) {
    if (isPrime(i)) allPrime.push(i)
}
console.log(Math.max(...allPrime))
