export default class Hamming{
  compute(dna1:string, dna2:string):number{
    if(dna1.length != dna2.length){
      throw new Error("DNA strands must be of equal length.")
    }

    const diff = dna2.split('').filter((nucleotide, index)=> nucleotide !== dna1.charAt(index))

    return diff.length
  }
}