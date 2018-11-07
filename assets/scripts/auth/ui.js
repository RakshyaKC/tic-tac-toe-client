'user strict'
const store = require('../store.js')

const showAuthedView = () => {
  const x = document.getElementById('authedView')
  x.style.display = 'block'
}
const hideUnAuthedView = () => {
  const x = document.getElementById('unAuthedView')
  x.style.display = 'none'
}
const showUnAuthedView = () => {
  const x = document.getElementById('unAuthedView')
  x.style.display = 'block'
}
const hideAuthedView = () => {
  const x = document.getElementById('authedView')
  x.style.display = 'none'
}

const hideGameboard = () => {
  const x = document.getElementById('gameboard')
  x.style.display = 'none'
}

const resetFormsSignUp = () => {
  const x = document.getElementById('sign-up')
  x.reset()
}

const resetFormsSignIn = () => {
  const x = document.getElementById('sign-in')
  x.reset()
}

const resetFormChangePassword =

const signUpSuccess = data => {
  console.log('signUpSuccess ran. Data is :', data)
  showAuthedView()
  hideUnAuthedView()
  resetFormsSignUp()
}

const signUpFailure = error => {
  console.log('signUpFailure ran. Error is :', error)
  resetFormsSignUp()
}

const signInSuccess = data => {
  store.user = data.user
  console.log('signInSuccess ran. Data is :', data)
  showAuthedView()
  hideUnAuthedView()
  resetFormsSignIn()
}
const signInFailure = error => {
  console.log('signInFailure ran. Error is :', error)
  resetFormsSignIn()
}

const changePasswordSuccess = data => {
  console.log('changePasswordSuccess ran. Data is :', data)
}
const changePasswordFailure = error => {
  console.log('changePasswordFailure ran. Error is :', error)
}

const signOutSuccess = () => {
  console.log('signOutSuccess ran.')
  store.user.token = []
  showUnAuthedView()
  hideAuthedView()
  hideGameboard()
}
const signOutFailure = error => {
  console.log('signOutFailure ran. Error is :', error)
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
