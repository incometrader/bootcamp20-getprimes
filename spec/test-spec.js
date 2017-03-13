describe('Generate Prime Numbers from 0 to a number `n` into an array', () => {
  it('should return [] for `1`', () => {
    expect(getPrimes(1)).toEqual([]);
  });

  it('should return `Invalid input` for booleans and strings', () => {
    expect(getPrimes(true)).toEqual('Invalid input');
  });

  it('should return `You cannot generate prime numbers from 0 to 0` for `0`', () => {
    expect(getPrimes(0)).toEqual('You cannot generate prime numbers from 0 to 0');
  });

  it('should return `Negative values cannot be prime` for negative numbers', () => {
    expect(getPrimes(-17)).toEqual('Negative values cannot be prime');
  });

  it('should return [2, 3, 5, 7] for `10`', () => {
    expect(getPrimes(10)).toEqual([2, 3, 5, 7]);
  });

  it('should return [2, 3, 5, 7, 11, 13, 17, 19] for `28`', () => {
    expect(getPrimes(28)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23]);
  });

  it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37] for `40`', () => {
    expect(getPrimes(40)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
  });

  it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67] for `67`', () => {
    expect(getPrimes(67))
    .toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]);
  });

  it('should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97] for `100`', () => {
    expect(getPrimes(100)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23,
      29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);
  });
});
