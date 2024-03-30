const password = document.querySelector('[data-password]')
const confirmPassword = document.querySelector('[data-confirm-password]')
const errorMsg = document.querySelector('.error-msg')
const submitButton = document.querySelector('[data-submit-btn]')

submitButton.addEventListener('click', e => {
  e.preventDefault()
  if (password.value !== confirmPassword.value) {
    errorMsg.textContent = '* Passwords do not match'
    password.classList.add('warning-border')
    confirmPassword.classList.add('warning-border')
  } else {
    errorMsg.textContent = ''
    password.classList.remove('warning-border')
    confirmPassword.classList.remove('warning-border')
  }
})
