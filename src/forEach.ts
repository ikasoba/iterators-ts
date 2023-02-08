export function forEach<V, I extends Iterable<V>>(iter: I, fn: (v: V, i: number, iter: I) => void){
  return function(){
    let i = 0
    for (const v of iter){
      fn(v, i, iter)
      i++
    }
  }
}