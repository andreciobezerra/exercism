function range(start: number,end:number){
  return Array.from({length: end}, (_, i) => i+start)
}

export function sum(factors: number[], limit: number) {
  return range(1, limit-1)
    .filter(n => factors.some(factor => n%factor===0))
    .reduce((acc,n) => acc+=n,0);  
}
