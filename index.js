function palindrome (number, count = 0) {
  const numberArray = number.toString().split('').map(item => parseInt(item))
  const size = numberArray.length
  let firstItem = numberArray[count]
  let lastItem = numberArray[size - count - 1]
  if(firstItem > lastItem){
    return palindrome(( ( firstItem - lastItem ) * Math.pow(10, count) ) + number)
  }
  if(firstItem < lastItem){
    return palindrome(( ( ( firstItem + 10 ) - lastItem ) * Math.pow(10, count) ) + number)
  }
  if(number.toString().split('').reverse().join() !== number.toString()){
    if(firstItem = lastItem){
      return palindrome(number, count + 1)
    }
  }
  return number
}

function userCounter (id) {
  return id - parseInt(id / 13)
}

function chainCounter (word1, word2) {
  const regexp = new RegExp(`^(${word2})`, 'm')
  const result = word1.match(regexp)
  return (result || []).length
}

module.exports = {
  palindrome: palindrome,
  userCounter: userCounter,
  chainCounter: chainCounter
}
