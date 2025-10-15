export default class Anagram {
  private subject: string;
  private subjectCount: Map<string, number>;

  constructor(subject: string) {
    this.subject = subject.toLowerCase();
    this.subjectCount = this.subject
      .split('')
      .reduce((counters, elem): Map<string, number> => counters.has(elem)
        ? counters.set(elem, counters.get(elem) + 1)
        : counters.set(elem, 1), new Map());
  }

  private isAnagram(word: string): boolean {
    const wordCount = word
      .toLowerCase()
      .split('')
      .reduce((counters, elem): Map<string, number> => counters.has(elem)
        ? counters.set(elem, counters.get(elem) + 1)
        : counters.set(elem, 1)
        , new Map());


    return [...wordCount.entries()]
      .every(([elem, amount]) => this.subjectCount.get(elem) === amount)
      &&
      this.subject.length === word.length;
  }

  public matches(...wordsList: Array<string>): Array<string> {
    return wordsList.filter(word => word.toLowerCase()!== this.subject && this.isAnagram(word));
  }
}