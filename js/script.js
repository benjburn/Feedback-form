/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable no-plusplus */
// const form = document.querySelector('.form-feedback')
// let validateBtn = form.querySelector('.validateBtn')
// let from = form.querySelector('.from')

// form.addEventListener('submit', function (event) {
//   event.preventDefault()
//   console.log('clicked on validate')
//   console.log('from: ', from.value)
// })

//

// eslint-disable-next-line no-undef
const form = document.getElementsByClassName('form-feedback')[0]
const formName = form.getElementsByClassName('form-text')[0]
const formTel = form.getElementsByClassName('form-tel')[0]
const formEmail = form.getElementsByClassName('form-email')[0]
const formBtn = form.getElementsByClassName('form-button')[0]
const fields = form.getElementsByClassName('form-feedback__input')

form.addEventListener('submit', function submitForm(event) {
  event.preventDefault()

})

/* 
  const form
      name
      tel
      email
      btn

  паттерн 1
  паттерн 2
  паттерн 3

  validateNameForm() {

    можно: А-Я а-я пробелы, тире
    нельзя: Цифры, A-Z a-z

  }
  


*/