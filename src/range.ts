export function* range(x: number, y?: number){
  const start = y ? x : 0
  const end   = y ? y : x
  for (let i = start; i < end; i++){
    yield i
  }
}