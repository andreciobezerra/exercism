/* eslint-disable no-unused-vars */
declare global {
  interface Number {
    decimalToBase(base: number): number[];
  }
}

// eslint-disable-next-line no-extend-native
Number.prototype.decimalToBase = function (base: number): number[] {
  let res = [];
  let n = Number(this);

  do {
    const [quotient, remainder] = integerDivision(n, base);

    res.unshift(remainder);
    n = quotient;
  } while (n > 1);

  if (n > 0) res.unshift(n);

  return res;
};

function toDecimal(numbers: number[], base: number): number {
  const decimalArr = numbers
    .reverse()
    .reduceRight((acc, digit, index) => acc + digit * Math.pow(base, index), 0);

  return Number(decimalArr);
}

function integerDivision(a: number, b: number): [number, number] {
  const quotient = Math.floor(a / b);
  const remainder = a % b;

  return [quotient, remainder];
}

function verifyExceptions(
  digits: number[],
  inputBase: number,
  outputBase: number,
): void {
  if (inputBase < 2) {
    throw new Error("Wrong input base");
  }

  if (outputBase < 2 || outputBase % 1 > 0) {
    throw new Error("Wrong output base");
  }

  const inputVerifications = [
    digits.length === 0, //verify empty input
    digits.length > 1 && digits.at(0) === 0 && digits.at(-1) === 0, // verify leading zero
    digits.some((n) => n < 0), //verify some negative digit
    digits.some((n) => n >= inputBase), //verify invalid digit
  ];

  if (inputVerifications.some(Boolean)) {
    throw new Error("Input has wrong format");
  }
}

export function convert(
  digits: number[],
  inputBase: number,
  outputBase: number,
): number[] {
  verifyExceptions(digits, inputBase, outputBase);

  return toDecimal(digits, inputBase).decimalToBase(outputBase);
}
