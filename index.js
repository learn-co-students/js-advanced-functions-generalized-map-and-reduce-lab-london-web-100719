function map(src, fn) {
   let arr = []

   for(let i = 0; i < src.length; i ++) {
       let el = src[i]
       arr.push(fn(el))
   }
   return arr
}

function reduce(src, fn, start) {
    let r = (!!start) ? start : src[0]
    let i = (!!start) ? 0 : 1

    for(; i < src.length; i++) {
        r = fn(src[i], r)
    }
    return r
}