import { sep } from "path"

class ProteinTranslation {
  static translateMap = new Map([
    ["AUG", "Methionine"],
    ["UUU", "Phenylalanine"],
    ["UUC", "Phenylalanine"],
    ["UUA", "Leucine"],
    ["UUG", "Leucine"],
    ["UCU", "Serine"],
    ["UCC", "Serine"],
    ["UCA", "Serine"],
    ["UCG", "Serine"],
    ["UAU", "Tyrosine"],
    ["UAC", "Tyrosine"],
    ["UGU", "Cysteine"],
    ["UGC", "Cysteine"],
    ["UGG", "Tryptophan"]
  ])

  static stopIndex(arrCodon: Array<string>): number {
    const index = arrCodon?.findIndex(codon => codon.match(/(UAA|UAG|UGA)/))

    return index > -1 ? index : arrCodon.length
  }

  static proteins(codons: string): Array<string> {
    const separeted = codons.match(/[A-Z]{3}/g) ?? ['']

    return separeted
      .slice(0, ProteinTranslation.stopIndex(separeted))
      .map(codon => ProteinTranslation.translateMap.get(codon) ?? '')
  }
}

export default ProteinTranslation
