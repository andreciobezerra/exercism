
type Roster = Map<string, string[]>;

export default class GradeSchool {
  private roster: Roster = new Map();

  public studentRoster(): Roster {
    const deepClone: Roster = new Map(JSON.parse(JSON.stringify([...this.roster.entries()])));

    return deepClone;
  }

  public addStudent(name: string, grade: number) {
    const exists = [...this.roster.entries()].find(grade => grade[1].includes);

    if (exists) {
      this.roster.set(exists[0], exists[1].filter(student => student !== name));
    }

    this.roster.get(grade.toString())?.push(name) ?? this.roster.set(grade.toString(), [name]);
    this.roster.get(grade.toString())?.sort((a, b) => a > b ? 1 : -1);
  }

  public studentsInGrade(grade: number): string[] {
    const deepClone: Roster = new Map(JSON.parse(JSON.stringify([...this.roster.entries()])));

    return deepClone.get(grade.toString()) ?? [];
  }
}