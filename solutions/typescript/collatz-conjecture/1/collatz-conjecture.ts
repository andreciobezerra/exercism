class CollatzConjecture {
  static steps(n: number, step: number = 0): number {
    if (n < 1) { throw Error('Only positive numbers are allowed') }
    if (n === 1) { return step }

    return n % 2 === 0
      ? CollatzConjecture.steps(n / 2, ++step)
      : CollatzConjecture.steps(3 * n + 1, ++step)

  }
}

export default CollatzConjecture
