export default class PerfectNumbers {
  private static range(start: number, end: number): Array<number> {
    return new Array(end).fill(start).map((n, i) => n + i)
  }

  private static factors(n: number): Array<number> {
    return PerfectNumbers.range(1, Math.floor(n / 2)).filter(elem => n % elem === 0)
  }

  private static classification(n: number, testValue: number): string {
    const classification = [
      { test: testValue < n, type: "deficient" },
      { test: testValue === n, type: "perfect" },
      { test: testValue > 0, type: "abundant" }
    ].find(classification => classification.test)

    return classification?.type ?? ''
  }

  static classify(n: number): string {
    if (n < 1 || !Number.isInteger(n)) {
      throw new Error("Classification is only possible for natural numbers.")
    }

    const nFactors = PerfectNumbers.factors(n)
    const factorsSum = nFactors.reduce((total, factor) => total += factor, 0)

    return PerfectNumbers.classification(n, factorsSum)
  }
}