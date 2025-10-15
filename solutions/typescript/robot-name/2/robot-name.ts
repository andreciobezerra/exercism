export default class Robot {
  public name: string;
  private static usedNames = new Set();

  constructor() {
    this.name = this.getRandomName();
  }

  private random(max: number): number {
    return Math.floor(Math.random() * max);
  }

  private getRandomName(): string {
    const randomChars = `${String.fromCharCode(this.random(26) + 65)}${String.fromCharCode(this.random(26) + 65)}`;
    const randomNumbers = `${this.random(1000)}`.padStart(2, '0');
    const randomName = randomChars.concat(randomNumbers);

    if (Robot.usedNames.has(randomName)) {
      this.getRandomName();
      return '';
    }

    Robot.usedNames.add(randomName);
    return randomName;
  }

  public resetName(): void {
    this.name = this.getRandomName();
  }

  public static releaseNames(): void {
    Robot.usedNames.clear();
  }
}
