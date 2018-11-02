'user strict'
// create function to populate the gameboard

const startNewGameSuccess = () => {
  console.log('startNewGameSuccess ran.')
}
const startNewGameFailure = error => {
  console.log('startNewGameFailure ran. Error is: ', error)
}

module.exports = {
  startNewGameSuccess,
  startNewGameFailure
}
