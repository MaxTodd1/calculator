const resultElement = document.getElementById('result') // беру элементы из html по айдишнику

const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const submitBtn = document.getElementById('submit')

const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiplyBtn = document.getElementById('multiplication')
const divideBtn = document.getElementById('division')

const selected = document.getElementById('selected')

let action = '' // сюда будет попадать один из математических элементов

// функция вывода результата
function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
} 

// основная функция которая производит вычисление
submitBtn.onclick = function () {

    if (action == '+') {
        const sum = Number(input1.value) + Number(input2.value)
        printResult(sum)
        input1.value = ''
        input2.value = ''
    } else if (action == '-') {
        const sum = Number(input1.value) - Number(input2.value)
        printResult(sum)
        input1.value = ''
        input2.value = ''
    } else if (action == '*') {
        const sum = Number(input1.value) * Number(input2.value)
        printResult(sum)
        input1.value = ''
        input2.value = ''
    } else if (action == '/') {
        const sum = Number(input1.value) / Number(input2.value)
        printResult(sum)
        input1.value = ''
        input2.value = ''
    }
    
}

// события через которые в action попадает 1 из математических элементов
plusBtn.onclick = function () {
    action = '+'
    selected.innerHTML = '+'
    console.log('plus')
}

minusBtn.onclick = function () {
    action = '-'
    selected.innerHTML = '-'
    console.log('minus')
}
  
multiplyBtn.onclick = function () {
    action = '*'
    selected.innerHTML = '*'
    console.log('multiplication')
}

divideBtn.onclick = function () {
    action = '/'
    selected.innerHTML = '/'
    console.log('division')
}