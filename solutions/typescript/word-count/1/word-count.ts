class Words {
  count(sentence: string): Map<string, number> {
    return sentence
      .toLowerCase()
      .split((/\s+/u))
      .filter(Boolean)
      .reduce((returnMap, word) => returnMap.has(word)
        ? returnMap.set(word, returnMap.get(word) + 1)
        : returnMap.set(word, 1), new Map())
  }
}

export default Words