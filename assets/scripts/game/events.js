'use strict'
const api = require('./api.js')
const ui = require('./ui.js')

// counter function counts numbers of clicks
// Should be counting number of clicks on each individual grid only once
let uniqueCount = 0
const count = []
const counter = () => {
  const target = event.target.id
  if (count.indexOf(target) === -1) {
    // if target is not present in array count, push target into it
    count.push(target)
    // add to number of unique clicks on the grid
    uniqueCount++
  }
  console.log(uniqueCount)
}

// clickGrid populates the board with each click
// create a null array of length 9. Tried creating an empty array but splice
// doesn't populate x and o in the right indices if those indices don't a;ready exist within the array.
const cells = ['', '', '', '', '', '', '', '', '']
const clickedGrid = event => {
  event.preventDefault()
  // console.log(event.target.id)
  const target = event.target.id
  // indices start at 0 so we need a constant that is target - 1 to
  // populate x & o in the right indices
  const targetIndex = target - 1
  const targetId = target.replace(/click/gi, 'section')
  // console.log(targetId) is the same as console.log(event.target.id)
  // If count is odd, enter X, if count is even, enter Y
  if (uniqueCount % 2 === 0) {
    $('#' + targetId).html('X')
    // use splice to insert x and o's at the indices of event.target.id
    cells.splice(targetIndex, 1, 'X')
    // turn off the button
    $('#' + targetId).off('click')
  } else if (uniqueCount % 2 === 1) {
    $('#' + targetId).html('O')
    cells.splice(targetIndex, 1, 'O')
    // https://stackoverflow.com/questions/17097947/jquery-using-a-variable-as-a-selector
    $('#' + targetId).off('click')
  } else {
    console.log('MAYDAY MAYDAY')
  }
  console.log(cells)
}

const determineWinner = () => {
  const xWins = () => {
    $('.col').off('click')
  }
  const oWins = () => {
    $('.col').off('click')
  }
  if (uniqueCount >= 5) {
    if ((cells[0] === 'X') && (cells[1] === 'X') && (cells[2] === 'X')) {
      xWins()
      console.log('Player X wins!')
    } else if ((cells[3] === 'X') && (cells[4] === 'X') && (cells[5] === 'X')) {
      xWins()
      console.log('Player X wins!')
    } else if ((cells[6] === 'X') && (cells[7] === 'X') && (cells[8] === 'X')) {
      xWins()
      console.log('Player X wins!')
    } else if ((cells[0] === 'X') && (cells[3] === 'X') && (cells[6] === 'X')) {
      xWins()
      console.log('Player X wins!')
    } else if ((cells[1] === 'X') && (cells[4] === 'X') && (cells[7] === 'X')) {
      xWins()
      console.log('Player X wins!')
    } else if ((cells[2] === 'X') && (cells[5] === 'X') && (cells[8] === 'X')) {
      xWins()
      console.log('Player X wins!')
    } else if ((cells[0] === 'X') && (cells[4] === 'X') && (cells[8] === 'X')) {
      xWins()
      console.log('Player X wins!')
    } else if ((cells[2] === 'X') && (cells[4] === 'X') && (cells[6] === 'X')) {
      xWins()
      console.log('Player X wins!')
    } else if ((cells[0] === 'O') && (cells[1] === 'O') && (cells[2] === 'O')) {
      oWins()
      console.log('Player O wins!')
    } else if ((cells[3] === 'O') && (cells[4] === 'O') && (cells[5] === 'O')) {
      oWins()
      console.log('Player O wins!')
    } else if ((cells[6] === 'O') && (cells[7] === 'O') && (cells[8] === 'O')) {
      oWins()
      console.log('Player O wins!')
    } else if ((cells[0] === 'O') && (cells[3] === 'O') && (cells[6] === 'O')) {
      oWins()
      console.log('Player O wins!')
    } else if ((cells[1] === 'O') && (cells[4] === 'O') && (cells[7] === 'O')) {
      oWins()
      console.log('Player O wins!')
    } else if ((cells[2] === 'O') && (cells[5] === 'O') && (cells[8] === 'O')) {
      oWins()
      console.log('Player O wins!')
    } else if ((cells[0] === 'O') && (cells[4] === 'O') && (cells[8] === 'O')) {
      oWins()
      console.log('Player O wins!')
    } else if ((cells[2] === 'O') && (cells[4] === 'O') && (cells[6] === 'O')) {
      oWins()
      console.log('Player O wins!')
    }
  } else if (uniqueCount > 8) {
    console.log('This game is a tie')
  }
}

const onGetGames = event => {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
}

// function to reset the game and start a new game with new id
const onCreateGame = event => {
  event.preventDefault()
  // document.getElementById('new-game').val('I was clicked')
  api.createGame()
    .then(ui.startNewGameSuccess)
    .catch(ui.startNewGameFailure)
}

const onShowAGame = event => {
  event.preventDefault()
  api.showAGame()
    .then(ui.showAGameSuccess)
    .catch(ui.showAGameFailure)
}

// TODO:
// *for API a function to store the div values in an array called "cells" within
// "game" object.
// Nice to have
// <h1> element updates with whose turn it is. Function would find the number of x and o.
// if num(x)> num(O), player {$X/O}'s turn

module.exports = {
  counter,
  clickedGrid,
  determineWinner,
  onGetGames,
  onCreateGame,
  onShowAGame
}
