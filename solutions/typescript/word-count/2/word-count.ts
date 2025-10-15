class Words {
  count(sentence: string): Map<string, number> {
    return sentence
      .toLowerCase()
      .trim()
      .split((/\s+/u))
      .reduce((returnMap, word) => returnMap.has(word)
        ? returnMap.set(word, returnMap.get(word) + 1)
        : returnMap.set(word, 1)
        , new Map())
  }
}

export default Words