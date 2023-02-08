export function map<V, I extends Iterable<V>, R>(iter: I, fn: (v: V, i: number, iter: I) => R){
  return function*(){
    let i = 0
    for (const v of iter){
      yield fn(v, i, iter)
      i++
    }
  }
}