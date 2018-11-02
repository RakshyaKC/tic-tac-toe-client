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

// clickGrid is supposed to populate the board.
// If count is odd, enter X, if count is even, enter Y
const clickedGrid = event => {
  event.preventDefault()
  console.log(event.target.id)
  const target = event.target.id
  const targetId = target.replace(/click/gi, 'section')
  $('#' + targetId).html('X')
}
// Reference used
// https://stackoverflow.com/questions/17097947/jquery-using-a-variable-as-a-selector

// TODO:
// for API a function to store the div values in an array called "cells" within
// "game" object.

// function to reset the game and start a new game with new id
const onStartNewGame = event => {
  event.preventDefault()
  // document.getElementById('new-game').val('I was clicked')
  api.startNewGame()
    .then(ui.startNewGameSuccess)
    .catch(ui.startNewGameFailure)
}

// Nice to have
// <h1> element updates with whose turn it is. Function would find the number of x and o.
// if num(x)> num(O), player {$X/O}'s turn

module.exports = {
  counter,
  clickedGrid,
  onStartNewGame
}
