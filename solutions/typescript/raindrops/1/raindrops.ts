export default class Raindrops {
  static sounds = ['Pling', 'Plang', 'Plong']

  private test(n: number): Array<boolean> {
    return [n % 3 === 0, n % 5 === 0, n % 7 === 0]
  }

  convert(n: number): string {
    const tests = this.test(n)

    return tests.some(Boolean)
      ? tests
        .reduce((result, test, index) => test
          ? result.concat(Raindrops.sounds[index])
          : result
        ,'')
      : n.toString()
  }
}