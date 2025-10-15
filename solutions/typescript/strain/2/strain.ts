type Predicate<T> = (elem: T) => boolean

export function keep<T>(arr: Array<T>, predicate: Predicate<T>): Array<T> {
  const result: Array<T> = []

  arr.forEach(element => predicate(element) && result.push(element))

  return result
}

export function discard<T>(arr: Array<T>, predicate: Predicate<T>): Array<T> {
  const result: Array<T> = []

  arr.forEach(element => !predicate(element) && result.push(element))

  return result
}