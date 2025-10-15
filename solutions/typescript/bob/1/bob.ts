class Bob {
  private responses = [
    {regex:/^\d+$/, response:"Whatever."},
    {regex:/^[A-Z]+\?$/, response:"Calm down, I know what I'm doing!"},
    {regex:/[^A-Z]*\?$/, response:"Sure."},
    {regex:/^[A-Z|\d|!]+!*$/, response:"Whoa, chill out!"},
    {regex:/^.{0}$/, response:"Fine. Be that way!"},
  ] 
  
  hey(sentence: string): string {
    const parsedSentence = sentence.match(/[a-z|?|!|\d]/ig)?.join('') ?? "" ;
    const situation = this.responses.find(resp=> resp.regex.test(parsedSentence));

    return situation?.response ?? "Whatever.";
  }
}

export default Bob
