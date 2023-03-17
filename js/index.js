// --> Start JS

// --> Variables

const elForm = document.querySelector('.form')
const elFirstInput = document.querySelector('.firstNumber')
const elSecondInput = document.querySelector('.secondNumber')
let result = document.querySelector('.result')
let btn_plus = document.querySelector('.plus')
let btn_minus = document.querySelector('.minus')
let btn_multiplication = document.querySelector('.multiplication')
let btn_allot = document.querySelector('.allot')

// --> Function

function plus(evt) {
  evt.preventDefault()
  return (result.textContent =
    "Result: " + (Number(elFirstInput.value.trim()) + Number(elSecondInput.value.trim())))
}
function minus(evt) {
  evt.preventDefault()
  return (result.textContent =
    "Result: " + (Number(elFirstInput.value.trim()) - Number(elSecondInput.value.trim()))
    )}
function multiplication(evt) {
  evt.preventDefault()
  return (result.textContent =
    "Result: " + (Number(elFirstInput.value.trim()) * Number(elSecondInput.value.trim())))
}
function allot(evt) {
  evt.preventDefault()
  return (result.textContent =
    "Result: " + (Number(elFirstInput.value.trim()) / Number(elSecondInput.value.trim())))
}

// --> Results

const plusResult = btn_plus.addEventListener('click', plus)
const minusResult = btn_minus.addEventListener('click', minus)
const multiplicationResult = btn_multiplication.addEventListener('click', multiplication,)
const allotResult = btn_allot.addEventListener('click', allot)

// --> Finished JS
