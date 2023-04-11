export function forEach<V>(iter: Iterable<V>, fn: (v: V, i: number, iter: Iterable<V>) => void) {
  let i = 0
  for (const v of iter){
    fn(v, i, iter)
    i++
  }
}