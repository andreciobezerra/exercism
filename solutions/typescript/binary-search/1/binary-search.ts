export function find(haystack: number[], needle: number, startIndex = 0, endIndex = haystack.length - 1): number | never {
  if (endIndex >= startIndex) {
    const middleIndex = startIndex + Math.trunc((endIndex - startIndex) / 2);
    const middleValue = haystack.at(middleIndex);

    if (middleValue === needle) {
      return middleIndex;
    }

    return middleValue! > needle
      ? find(haystack, needle, startIndex, middleIndex - 1)
      : find(haystack, needle, middleIndex + 1, endIndex);
  }

  throw new Error('Value not in array');

}
