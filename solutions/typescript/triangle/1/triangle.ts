class Triangle {
  private sides: Array<number>

  constructor(...sides: Array<number>) {
    this.sides = sides
  }

  private triangleInequality(): boolean {
    const [a, b, c] = this.sides

    return a + b < c || b + c < a || a + c < b
  }

  kind(): string {
    enum Kinds {
      EQUILATERAL = 1,
      ISOSCELES,
      SCALENE
    }

    if (this.sides.some(side => side <= 0) || this.triangleInequality()) {
      throw new Error();
    }

    const numberOfEqualsSides = new Set(this.sides).size

    return Kinds[numberOfEqualsSides].toLowerCase()

  }
}

export default Triangle