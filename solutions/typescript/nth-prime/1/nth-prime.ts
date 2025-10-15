export function nth(n: number) {
  if(n<1) {
    throw new Error("Prime is not possible");
  }
  
  let primes : Array<number> = [2];
  let candidate = 2
  
  while(primes.length < n) {
    if (primes.every(x => candidate % x!==0)) {
      primes.push(candidate)
    }

    candidate++
  }

  return primes.at(-1);
}
