export default {
  isArmstrongNumber(n: number): boolean {
    const size = n.toString().length

    const powsSum = Array.from(n.toString())
      .reduce((total, alg) => total += Math.pow(parseInt(alg), size), 0)

    return powsSum === n
  }
}