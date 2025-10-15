const allergensTable = new Map([
  ["cats", 128],
  ["pollen", 64],
  ["chocolate", 32],
  ["tomatoes", 16],
  ["strawberries", 8],
  ["shellfish", 4],
  ["peanuts", 2],
  ["eggs", 1],
]);

export class Allergies {
  private myAllergies: string[] = [];

  constructor(allergenIndex: number) {
    allergensTable.forEach((allergenValue, allergenName) => {
      if (allergenIndex >= allergenValue) {
        this.myAllergies.push(allergenName);
        allergenIndex %= allergenValue;
      }
    });
  }

  public list(): string[] {
    return this.myAllergies.reverse();
  }

  public allergicTo(allergen: string): boolean {
    console.log(this.myAllergies);
    return this.myAllergies.includes(allergen);
  }
}
