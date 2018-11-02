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
  console.log(count)
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
    // use splice to insert x and o's at the indices of event.target.id?
    cells.splice(targetIndex, 1, 'X')
  } else if (uniqueCount % 2 === 1) {
    $('#' + targetId).html('O')
    cells.splice(targetIndex, 1, 'O')
    // https://stackoverflow.com/questions/17097947/jquery-using-a-variable-as-a-selector
  } else {
    console.log('MAYDAY MAYDAY')
  }
  console.log(cells)
}

// Determining the winner
// Winning if below id's have the same string value (X or O)
// horizontal [0,1,2; 3,4,5; 6,7,8;]
// vertical [0,3,6; 1,4,7; 2,5,8]
// diagonals [2,4,6; 0,4,8]
const determineWinner = () => {
  if (uniqueCount >= 5) {
    if ((cells[0] && cells[1] && cells[2]) === 'X' || 'O') {
      console.log('You win')
    } else if ((cells[3] && cells[4] && cells[5]) === 'X' || 'O') {
      console.log('You win')
    } else if ((cells[6] && cells[7] && cells[8]) === 'X' || 'O') {
      console.log('You win')
    } else if ((cells[0] && cells[3] && cells[6]) === 'X' || 'O') {
      console.log('You win')
    } else if ((cells[1] && cells[4] && cells[7]) === 'X' || 'O') {
      console.log('You win')
    } else if ((cells[2] && cells[5] && cells[8]) === 'X' || 'O') {
      console.log('You win')
    } else if ((cells[2] && cells[4] && cells[6]) === 'X' || 'O') {
      console.log('You win')
    } else if ((cells[0] && cells[4] && cells[8]) === 'X' || 'O') {
      console.log('You win')
    }
  }
  //
}

// function to reset the game and start a new game with new id
const onStartNewGame = event => {
  event.preventDefault()
  // document.getElementById('new-game').val('I was clicked')
  api.startNewGame()
    .then(ui.startNewGameSuccess)
    .catch(ui.startNewGameFailure)
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
  onStartNewGame
}
