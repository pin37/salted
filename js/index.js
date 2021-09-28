var toSalted = true

const reversButton = document.getElementById('reversButton')
reversButton.addEventListener('click', reverse, false)

const inputText = document.getElementById('inputText')
if (inputText.addEventListener) {
  inputText.addEventListener('input', translateClick, false)
} else if (inputText.attachEvent) {
  area.attachEvent('onpropertychange', translateClick)
}

const translateButton = document.getElementById('translateButton')
translateButton.addEventListener('click', translateClick, false)

function reverse() {
  toSalted = !toSalted
  const inputLabel = document.getElementById('inputLabel')
  const outputLabel = document.getElementById('outputLabel')
  if (toSalted) {
    inputLabel.innerHTML = 'original'
    inputLabel.classList.remove('bg-success')
    inputLabel.classList.add('bg-secondary')

    outputLabel.innerHTML = 'salted'
    outputLabel.classList.remove('bg-secondary')
    outputLabel.classList.add('bg-success')
  } else {
    inputLabel.innerHTML = 'salted'
    inputLabel.classList.remove('bg-secondary')
    inputLabel.classList.add('bg-success')

    outputLabel.innerHTML = 'original'
    outputLabel.classList.remove('bg-success')
    outputLabel.classList.add('bg-secondary')
  }
}

function translateClick() {
  const text = inputText.value.trim()
  document.getElementById('outputText').value = translate(text, toSalted)
}
