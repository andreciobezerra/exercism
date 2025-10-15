class Pangram{
  constructor(private text: string){}

  isPangram(): boolean{
    const parsedSetence = this.text
    .toLowerCase()
    .split('')
    .filter(char => char.match(/[a-z]/))
    
  return new Set(parsedSetence).size === 26
  }
}

export default Pangram