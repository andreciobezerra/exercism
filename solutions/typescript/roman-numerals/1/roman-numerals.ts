class RomanNumerals {
  private static Unities = new Map([
    ["1", "I"],
    ["2", "II"],
    ["3", "III"],
    ["4", "IV"],
    ["5", "V"],
    ["6", "VI"],
    ["7", "VII"],
    ["8", "VIII"],
    ["9", "IX"],
    ["0", ""]
  ]);

  private static Dozens = new Map([
    ["1", "X"],
    ["2", "XX"],
    ["3", "XXX"],
    ["4", "XL"],
    ["5", "L"],
    ["6", "LX"],
    ["7", "LXX"],
    ["8", "LXXX"],
    ["9", "XC"],
    ["0", ""]
  ]);

  private static Hundreds = new Map([
    ["1", "C"],
    ["2", "CC"],
    ["3", "CCC"],
    ["4", "CD"],
    ["5", "D"],
    ["6", "DC"],
    ["7", "DCC"],
    ["8", "DCCC"],
    ["9", "CM"],
    ["0", ""]
  ]);

  private static Thousands = new Map([
    ["1", "M"],
    ["2", "MM"],
    ["3", "MMM"],
    ["0", ""]
  ]);

  static roman(num: number): string {
    const normalize = num.toString().padStart(4, "0");
    const romanThousand = RomanNumerals.Thousands.get(normalize[0]);
    const romanHundred = RomanNumerals.Hundreds.get(normalize[1]);
    const romanDozen = RomanNumerals.Dozens.get(normalize[2]);
    const romanUnity = RomanNumerals.Unities.get(normalize[3]);

    return `${romanThousand}${romanHundred}${romanDozen}${romanUnity}`;
  }
}

export default RomanNumerals;
