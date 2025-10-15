const PONTUATION =[
  {chars:["A","E","I","O","U", "L", "N","R","S", "T"], value:1},
  {chars:["D","G"],value:2},
  {chars:["B","C", "M","P"], value:3},
  {chars:["F","H", "V","W", "Y"], value:4},
  {chars:["K"], value:5},
  {chars:["J","X"], value:8},
  {chars:["Q","Z"], value:10}
]

function score(str:string | undefined):number{
  let points = 0

  str?.toUpperCase()
  .split('')
  .forEach(char=> points+=PONTUATION.find(range => range.chars.includes(char))?.value ?? 0)

  return points
}

export default score