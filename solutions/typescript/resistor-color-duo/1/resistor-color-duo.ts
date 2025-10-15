const codes = new Map<string, string>([
  ["black", "0"],
  ["brown", "1"],
  ["red", "2"],
  ["orange", "3"],
  ["yellow", "4"],
  ["green", "5"],
  ["blue", "6"],
  ["violet", "7"],
  ["grey", "8"],
  ["white", "9"]
]);

export class ResistorColor {
  private colors: Array<string>;

  constructor(colors: Array<string>) {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present")
    }
    this.colors = colors.slice(0, 2);
  }

  value(): number {
    const colorCode = this.colors
      .map(color => codes.get(color.toLowerCase()))
      .join('');

    return parseInt(colorCode);
  }
}
