class Gigasecond {
  private initialDate: Date
  static gigaSecond = 10 ** 9

  constructor(date: Date) {
    this.initialDate = date
  }

  date(): Date {
    const parsedDate = Date.parse(`${this.initialDate}`);

    return new Date(parsedDate + Gigasecond.gigaSecond * 1000);
  }
}

export default Gigasecond
