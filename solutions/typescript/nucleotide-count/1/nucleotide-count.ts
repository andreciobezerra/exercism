class NucleotideCount {
  static nucleotideCounts(nucleotides: string): Record<string, number> {
    if (nucleotides.match(/[^A|C|G|T]/)) {
      throw new Error("Invalid nucleotide in strand")
    }


    const count: Record<string, number> = {
      A: 0,
      C: 0,
      G: 0,
      T: 0
    }

    nucleotides.split('').forEach(nucleotide => count[nucleotide]++)

    return count
  }
}

export default NucleotideCount
