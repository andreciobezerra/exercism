type T = number | undefined | Array<T>

function flatten(arr: Array<T>): Array<T> {
  const flat1 = arr.flat()

  return flat1.some(elem => Array.isArray(elem))
    ? flatten(flat1)
    : flat1.filter(elem => elem !== undefined)
}

export default {
  flatten
}