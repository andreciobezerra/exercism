export default class Series {
  public digits: number[];

  constructor(serie: string) {
    this.digits = serie.split('').map(num => parseInt(num));
  }

  slices(sliceSize: number): number[][] {
    if (sliceSize > this.digits.length) {
      throw Error();
    }

    return this.digits
      .map((_, index) => this.digits.slice(index, index + sliceSize))
      .filter(arr => arr.length === sliceSize);
  }
}