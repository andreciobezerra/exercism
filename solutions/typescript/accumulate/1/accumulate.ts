function accumulate<T, K>(arr: Array<T>, callback: (param: T) => K): Array<K> {
  const result: Array<K> = []

  arr.forEach(elem => result.push(callback(elem)))

  return result
}

export default accumulate