export const FindPrimeNumber = ({primeNumber, diapasonPrimeNumbers}) => {
    const isPrimeNumber = (num = primeNumber) => {
        for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return num > 1
    }
// Not good solution, algorithm complexity = O(n2)
    const getPrimes = (num = diapasonPrimeNumbers) => {
        let primeNumbers = []
        for (let i = 2; i <= num; i++) {
            if (isPrimeNumber(i)) {
                primeNumbers.push(i)
            }
        }
        return primeNumbers
    }
//Good solution, sieve of eratosthenes, algorithm complexity = O(n * log(logn))
    const getPrimesEratosthenes = (num = diapasonPrimeNumbers) => {
        let sieve = []
        let primes = []
        for(let i = 2; i <= num; i++){
            if(!sieve[i]){
                primes.push(i)
                for(let j = i*i; j <= num; j+=i){
                    sieve[j] = true
                }
            }
        }
        console.log(sieve)
        return primes
    }

    return (
        <>
            <div><b>Is this prime number???</b> <span>{primeNumber}</span></div>
            <div>Result: {isPrimeNumber(primeNumber).toString()}</div>
            <hr/>
            <div><b>Show all prime numbers to:</b> {diapasonPrimeNumbers}</div>
            <div>Result: {getPrimesEratosthenes(diapasonPrimeNumbers).toString()}</div>
        </>
    )
}