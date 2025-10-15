class Squares {
  private range: Array<number>;

  constructor(num: number) {
    this.range = new Array(num).fill(1).map((n, index) => n + index);
  }

  get sumOfSquares(): number {
    return this.range
      .reduce((result, value) => result += Math.pow(value, 2), 0);
  }

  get squareOfSum(): number {
    return Math.pow(
      this.range.reduce((result, value) => result += value, 0), 2
    );
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }
}


export default Squares