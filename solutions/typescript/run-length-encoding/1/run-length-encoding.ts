export default class RunLengthEncoding {
  static encode(sentence: string): string {
    return sentence.replace(/(.)\1+/g, (matched, char) => `${matched.length}${char}`);
  }

  static decode(sentence: string): string {
    return sentence.replace(/(\d+)(.)/g, (_, length, char) => char.repeat(parseInt(length)));
  }
}