const test_functions = require('./index.js')

describe('palindrome test', function() {

  test('case 1', function() {
    expect(test_functions.palindrome(12)).toBe(22)
  })

  test('case 2', function() {
    expect(test_functions.palindrome(334123)).toBe(334433)
  })

  test('case 3', function() {
    expect(test_functions.palindrome(1234)).toBe(1331)
  })

  test('case 4', function() {
    expect(test_functions.palindrome(986)).toBe(989)
  })
})

describe('user counter', function() {

  test('case 1', function() {
    expect(test_functions.userCounter(27)).toBe(25)
  })
})

describe('character counter', function() {

  test('case 1', function() {
    expect(test_functions.chainCounter('ababa', 'aba')).toBe(2)
  })
})

