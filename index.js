document.addEventListener('DOMContentLoaded', () => {
  main()
})

function main() {
  let isResultCalculated = true

  const buttons = document.getElementsByTagName('input')
  const finalResult = document.getElementById('final-result')
  const form = document.getElementsByClassName('calculator-form')[0]

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    finalResult.value = eval(finalResult.value)
    isResultCalculated = true
  })

  for (let button of buttons) {
    if (button.className === 'op') {
      button.addEventListener('click', () => {
        finalResult.value = finalResult.value + button.value
        isResultCalculated = false
      })
    }
    if (button.className === 'num') {
      button.addEventListener('click', () => {
        if (isResultCalculated) {
          finalResult.value = 0
          isResultCalculated = false
        }

        if (finalResult.value == 0) {
          finalResult.value = button.value
        } else {
          finalResult.value = finalResult.value + button.value
        }
      })
    }
    if (button.className === 'clear-result') {
      button.addEventListener('click', () => {
        finalResult.value = 0
      })
    }
  }

  window.addEventListener('keypress', (e) => {
    const key = e.key
    const keysMap = new Map()
    keysMap.set('1', 1)
    keysMap.set('2', 2)
    keysMap.set('3', 3)
    keysMap.set('4', 4)
    keysMap.set('5', 5)
    keysMap.set('6', 6)
    keysMap.set('7', 7)
    keysMap.set('8', 8)
    keysMap.set('9', 9)
    keysMap.set('0', 0)
    keysMap.set('Enter', '=')
    keysMap.set('*', '*')
    keysMap.set('+', '+')
    keysMap.set('-', '-')
    keysMap.set('.', '.')

    if (keysMap.has(key)) {
      const element = document.getElementById(keysMap.get(key))
      element.click()
    }
  })
}
