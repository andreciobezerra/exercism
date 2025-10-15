class Isogram {
  static isIsogram(word: string): boolean {

    const regex = /[a-z]/g;
    const normatizedWord = word.toLowerCase();
    const wordSet = new Set(normatizedWord.match(regex));

    return wordSet.size === (normatizedWord.match(regex)?.length ?? 0);
  }
}

export default Isogram;
