export function* map<V, R>(iter: Iterable<V>, fn: (v: V, i: number, iter: Iterable<V>) => R) {
  let i = 0
  for (const v of iter){
    yield fn(v, i, iter)
    i++
  }
}