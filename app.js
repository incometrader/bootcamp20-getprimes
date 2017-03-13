const isPrime = function prime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getPrimes = function primes(n) {
  if (n < 0) return 'Negative values cannot be prime';
  if (n === 0) return 'You cannot generate prime numbers from 0 to 0';
  if (typeof n !== 'number') return 'Invalid input';
  const arr = [];
  let i = 2;
  while (i <= n) {
    if (isPrime(i)) arr.push(i);
    i += 1;
  }
  return arr;
};

module.exports = getPrimes;
