const values = new Map([
  ["black","0"],
  ["brown", "1"],
  ["red", "2"],
  ["orange", "3"],
  ["yellow", "4"],
  ["green", "5"],
  ["blue", "6"],
  ["violet", "7"],
  ["grey", "8"],
  ["white", "9"],
]);

export function decodedResistorValue(colorCodes: string[]) {
  const rawValues: string[] = colorCodes
    .map(code => values.get(code.toLowerCase()) ?? "")
    .filter(values => !!values);

  const ohms = rawValues.slice(0,2).join("");
  const amountOfZeros = +rawValues[2];
  const value = ohms.concat("0".repeat(amountOfZeros));  
  
  return +value > 1000 
    ? `${value.slice(0,-3)} kiloohms` 
    :  `${value} ohms`;

}
