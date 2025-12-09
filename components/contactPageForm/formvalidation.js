const form = document.querySelector("#form")

const inputName = document.querySelector("#nameForm")
const inputNameError = document.querySelector("#nameErorForm")
const inputEmail = document.querySelector("#emailForm")
const inputEmailError = document.querySelector("#emailErorForm")
const inputCompanyName = document.querySelector("#companyNameForm")
const inputCompanyNameError = document.querySelector("#companyNameErorForm")
const inputTitle = document.querySelector("#titleForm")
const inputTitleError = document.querySelector("#titleErorForm")
const inputMessage = document.querySelector("#messageForm")
const inputMessageError = document.querySelector("#messageErorForm")
const inputCheckout = document.querySelector("#checkForm")
const inputCheckoutError = document.querySelector("#checkErorForm")



inputNameError.innerHTML = `${inputName.validationMessage}`

inputEmailError.innerHTML = `${inputEmail.validationMessage}`

inputCompanyNameError.innerHTML = `${inputCompanyName.validationMessage}`

inputTitleError.innerHTML = `${inputTitle.validationMessage}`

inputMessageError.innerHTML = `${inputMessage.validationMessage}`

inputCheckoutError.innerHTML = `${inputCheckout.validationMessage}`