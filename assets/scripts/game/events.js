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
console.log(count)

// clickGrid populates the board with each click
// If count is odd, enter X, if count is even, enter Y
const cells = []
const clickedGrid = event => {
  event.preventDefault()
  console.log(event.target.id)
  const target = event.target.id
  const targetId = target.replace(/click/gi, 'section')
  // console.log(targetId) is the same as console.log(event.target.id)
  console.log(uniqueCount)
  // maybe use splice to insert x and o's at the indices of event.target.id?
  if (uniqueCount % 2 === 0) {
    $('#' + targetId).html('X')
    cells.splice(target, 0, 'X')
  } else if (uniqueCount % 2 === 1) {
    $('#' + targetId).html('O')
    cells.splice(target, 0, 'O')
    // https://stackoverflow.com/questions/17097947/jquery-using-a-variable-as-a-selector
  } else {
    console.log('MAYDAY MAYDAY')
  }
  console.log(cells)
}

// Determining the winner
// Winning if below id's have the same string value (X or O)
// horizontal [1,2,3; 4,5,6; 7,8,9;]
// vertical [1,4,7; 2,5,8; 3,6,9]
// diagonals [1,5,9; 3,5,7]
const determineWinner = () => {
  if (uniqueCount >= 5) {
  }
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
