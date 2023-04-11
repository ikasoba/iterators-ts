export function* exclude<V, E extends V>(iter: Iterable<V>, fn: (v: V, i: number, iter: Iterable<V>) => v is E): Generator<Exclude<V, E>, void, unknown> {
  let i = 0
  for (const v of iter){
    if (!fn(v, i, iter)){
      yield v as Exclude<V, E>
    }
    i++
  }
}