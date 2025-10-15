export default class Acronym {
  public static parse(phrase: string): string {
    const matches = phrase.match(/^[A-Z]|[A-Z][a-z]|\W[a-z]/g) ?? [];

    return matches.map(elem => elem.replace(/[^a-z]/gi, '').charAt(0).toUpperCase()).join('');
  }
}
