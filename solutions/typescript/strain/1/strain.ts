interface CallbackFunction<T> {
  (elem: T): boolean
}

export function keep<T>(arr: Array<T>, callback: CallbackFunction<T>): Array<T> {
  const result: Array<T> = []

  arr.forEach(element => {
    if (callback(element)) { result.push(element) }
  })

  return result
}

export function discard<T>(arr: Array<T>, callback: CallbackFunction<T>): Array<T> {
  const result: Array<T> = []

  arr.forEach(element => {
    if (!callback(element)) { result.push(element) }
  })

  return result
}