export function calculatePrimeFactors(n: number) : Array<number> {
  let prime_factors: Array<number> = [];
  let candidate = 2;

  while(n>1) {
    if(n%candidate===0) {
      prime_factors.push(candidate);
      n/=candidate;
    } else {
      candidate++;
    }
  }

  return prime_factors;
}
