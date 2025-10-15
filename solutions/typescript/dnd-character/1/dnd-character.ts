export class DnDCharacter {
  public strength = DnDCharacter.generateAbilityScore();
  public dexterity = DnDCharacter.generateAbilityScore();
  public constitution = DnDCharacter.generateAbilityScore();
  public intelligence = DnDCharacter.generateAbilityScore();
  public wisdom = DnDCharacter.generateAbilityScore();
  public charisma = DnDCharacter.generateAbilityScore();
  public hitpoints = 10;

  constructor() {
    this.hitpoints =
      this.hitpoints + DnDCharacter.getModifierFor(this.constitution);
  }

  private static rollDie(): number {
    return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  }

  public static generateAbilityScore(): number {
    const round = [
      this.rollDie(),
      this.rollDie(),
      this.rollDie(),
      this.rollDie(),
    ];

    return round
      .filter((value) => value !== Math.min(...round))
      .reduce((acc, value) => (acc += value), 0);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
