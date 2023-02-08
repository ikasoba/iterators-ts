export function repeat<T>(length: number, fn: (i: number) => T){
  return function*(){
    for (let i = 0; i < length; i++){
      yield fn(i)
    }
  }
}