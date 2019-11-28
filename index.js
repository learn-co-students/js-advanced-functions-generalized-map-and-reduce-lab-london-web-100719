// Add your functions here
const map = (source, callback) => {
  let result = [];
  for (let i = 0; i < source.length; i++) {
    result.push(callback(source[i]))
  }
  return result
}

const reduce = (source, callback, init = 0) => {
  let result = (!!init) ? init : source[0]
  let i = (!!init) ? 0 : 1

  for (; i < source.length; i++) {
    result = callback(source[i], result)
  }
  return result
}