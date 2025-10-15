const MINUTES_PER_DAY = 24 * 60;

export default class Clock {
  private time = 0;

  constructor(hours: number, minutes: number = 0) {
    this.time += hours < 0 ? this.parseNegativeHours(hours) * 60 : hours * 60;
    this.time += minutes < 0 ? this.parseNegativeMinutes(minutes) : minutes;

    if (this.time > MINUTES_PER_DAY) {
      this.time = this.time % MINUTES_PER_DAY;
    }
  }

  private parseNegativeHours(hours: number): number {
    return Math.abs(hours) < 24
      ? 24 + hours
      : 24 + hours % 24;
  }

  private parseNegativeMinutes(minutes: number): number {


    return Math.abs(minutes) < MINUTES_PER_DAY
      ? MINUTES_PER_DAY + minutes
      : MINUTES_PER_DAY + (minutes % MINUTES_PER_DAY);
  }

  public toString(): string {
    const hours = Math.trunc(this.time / 60) % 24;
    const minutes = this.time % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  public plus(plusMinutes: number): this {
    this.time += plusMinutes;

    return this;
  }

  public minus(minusMinutes: number): this {
    this.time -= minusMinutes;

    if (this.time < 0) {
      this.time = (this.time % MINUTES_PER_DAY) + MINUTES_PER_DAY;
    }

    return this;
  }

  public equals(otherClock: Clock): boolean {
    return this.time === otherClock.time;
  }
}