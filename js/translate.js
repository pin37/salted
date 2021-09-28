const eng = ['a', 'e', 'i', 'o', 'u', 'y']
const rus = ['а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я']

function translate(text, toSalted) {
  var result = ''
  if (toSalted) {
    for (var i = 0; i < text.length; i++) {
      const char = text.charAt(i)
      if (isVowel(char, rus)) {
        result += char + 'с' + char
      } else if (isVowel(char, eng)) {
        result += char + 's' + char
      } else {
        result += char
      }
    }
  } else {
    for (var i = 1; i < text.length - 1; i++) {
      const char1 = text.charAt(i - 1)
      const char2 = text.charAt(i)
      const char3 = text.charAt(i + 1)
      if (char2 === 'с') {
        if (isVowel(char1, rus) && char1 === char3) {
          text = text.substring(0, i) + text.substring(i + 2)
        }
      } else if (char2 === 's') {
        if (isVowel(char1, eng) && char1 === char3) {
          text = text.substring(0, i) + text.substring(i + 2)
        }
      }
    }

    result = text
  }

  return result
}

function isVowel(c, vowels) {
  return vowels.includes(c.toLowerCase())
}
