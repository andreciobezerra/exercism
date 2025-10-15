
class Matrix {
  public rows: number[][];
  public columns: any;

  constructor(sequence: string) {
    this.rows = sequence
      .split("\n")
      .map(lineSeq => lineSeq.split(' ').map(elem => parseInt(elem)));

    this.columns = Array.from({ length: this.rows[0].length })
      .map((_, index) => this.rows.map(row => row[index]));


  }
}

export default Matrix;
