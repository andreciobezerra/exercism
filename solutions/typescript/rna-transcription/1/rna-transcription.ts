class Transcriptor {
  static invalid = /[^G,C,T,A]/i
  static RNA = new Map([["G", "C"], ["C", "G"], ["T", "A"], ["A", "U"]])

  toRna(dna: string): string {
    if (dna.match(Transcriptor.invalid)) {
      throw new Error("Invalid input DNA.")
    }

    return dna
      .split("")
      .map(elem => Transcriptor.RNA.get(elem))
      .join('')
  }
}

export default Transcriptor
