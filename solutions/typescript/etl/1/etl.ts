function transform(old: Record<string, Array<string>>): Record<string, number> {
  const entries = Object.entries(old)
  const convertedArray = entries.flatMap(entry => {
    const [key, values] = entry
    
    return values.map((value:string)=> [value.toLowerCase(), parseInt(key)])
  })

  return Object.fromEntries(convertedArray)
}

export default transform
