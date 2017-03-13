const isPrime = function prime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

