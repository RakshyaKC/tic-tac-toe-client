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

const resetSignUp = () => {
  const x = document.getElementById('sign-up')
  x.reset()
}

const resetSignIn = () => {
  const x = document.getElementById('sign-in')
  x.reset()
}

const resetChangePassword = () => {
  const x = document.getElementById('change-password')
  x.reset()
}

const signUpSuccess = data => {
  // needs to redirect to sign in
  $('#unAuthedMessage').html(`Sign up was successful. Sign in to start playing!`)
  resetSignUp()
}

const signUpFailure = () => {
  $('#unAuthedMessage').html(`Sorry, sign up was unsuccessful. Try again.`)
  // console.log('signUpFailure ran. Error is :', error)
  resetSignUp()
}

const signInSuccess = data => {
  store.user = data.user
  // console.log('signInSuccess ran. Data is :', data)
  showAuthedView()
  hideUnAuthedView()
  $('#unAuthedMessage').html('')
  resetSignIn()
}
const signInFailure = () => {
  $('#unAuthedMessage').html(`Sorry, sign in was unsuccessful. Try again.`)
  // console.log('signInFailure ran. Error is :', error)
  resetSignIn()
}

const changePasswordSuccess = data => {
  // console.log('changePasswordSuccess ran. Data is :', data)
  $('#authedMessage').html(`Congratulations! Password was changed successfully!`)
  resetChangePassword()
}
const changePasswordFailure = () => {
  // console.log('changePasswordFailure ran. Error is :', error)
  $('#authedMessage').html(`Sorry password couldn't be changed. Try again!`)
  resetChangePassword()
}

const signOutSuccess = () => {
  // console.log('signOutSuccess ran.')
  store.user.token = []
  showUnAuthedView()
  hideAuthedView()
  hideGameboard()
}
const signOutFailure = () => {
  $('#authedMessage').html(`Sorry, sign out was unsuccessful. Try again.`)
  // console.log('signOutFailure ran. Error is :', error)
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
