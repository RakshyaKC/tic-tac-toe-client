'use strict'
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store.js')

// function to start the game and start a new game with new id
const onCreateGame = event => {
  event.preventDefault()
  $('.col').html('')
  // emptying the value of all .col divs
  api.createGame()
    .then((response) => {
      ui.createGameSuccess(response)
      // turn elements in .col back on and set up eevnt listeners for the
      // clicks with callback function clickedGrid
      $('.col').on('click', clickedGrid)
      // reinitialize uniqueCount. It was stuck at the winning uniqueCount
      // without this part.
      $('.col').on('click', counter)
      $('.col').on('click', determineWinner)
      uniqueCount = 0
      count = []
    })
    .catch(ui.createGameFailure)
}

// counter function counts numbers of clicks
// Should be counting number of clicks on each individual grid only once
let uniqueCount = 0
let count = []
const counter = () => {
  const target = event.target.id
  // console.log(target)
  if (count.indexOf(target) === -1) {
    // if target is not present in array count, push target into it
    count.push(target)
    // add to number of unique clicks on the grid
    uniqueCount++
  }
  // console.log(uniqueCount)
}
// clickedGrid populates the board with each click
const clickedGrid = event => {
  const target = event.target.id
  const targetIndex = target - 1
  const cells = store.game.cells
  // indices start at 0 so we need a constant that is target - 1 to
  // populate x & o in the right indices
  const targetId = target.replace(/click/gi, 'section')
  // create the new id for the section we want to open.
  // console.log(targetId) is the same as console.log(event.target.id)
  // If count is odd, enter X, if count is even, enter Y

  if (uniqueCount % 2 === 0) {
    $('#whoseTurn').html(`Player o's turn`)
    $('#' + targetId).html('x')
    // gets the id of event element and sets it as the variable
    // use splice to insert x and o's at the indices of event.target.id
    cells.splice(targetIndex, 1, 'x')
    // add event handler for update in api & turn off the button
    $('#' + targetId).off('click')
  } else if (uniqueCount % 2 === 1) {
    $('#whoseTurn').html(`Player x's turn`)
    $('#' + targetId).html('o')
    cells.splice(targetIndex, 1, 'o')
    // https://stackoverflow.com/questions/17097947/jquery-using-a-variable-as-a-selector
    $('#' + targetId).off('click')
  }
  console.log(cells)
  // saving the cells value for updating game
  const data = {
    'game': {
      'cell': {
        'index': targetIndex,
        'value': cells[targetIndex]
      },
      'over': false
    }
  }
  // const onUpdateAGame = (event, data) => {
  api.updateAGame(event, data)
    .then(ui.updateAGameSuccess)
    .catch(ui.updateAGameFailure)
}

const xWins = () => {
  $('#winOrTie').html('Player X wins!')
  $('#userNotification').modal('show')
  $('.col').off('click')
}
const oWins = () => {
  $('#winOrTie').html('Player O wins!')
  $('#userNotification').modal('show')
  $('.col').off('click')
}

const isTie = () => {
  $('#winOrTie').html('This game is a tie. Play again!')
  $('#userNotification').modal('show')
  $('.col').off('click')
}

const determineWinner = () => {
  const cells = store.game.cells
  if (uniqueCount >= 5) {
    if ((cells[0] === 'x') && (cells[1] === 'x') && (cells[2] === 'x')) {
      xWins()
    } else if ((cells[3] === 'x') && (cells[4] === 'x') && (cells[5] === 'x')) {
      xWins()
    } else if ((cells[6] === 'x') && (cells[7] === 'x') && (cells[8] === 'x')) {
      xWins()
    } else if ((cells[0] === 'x') && (cells[3] === 'x') && (cells[6] === 'x')) {
      xWins()
    } else if ((cells[1] === 'x') && (cells[4] === 'x') && (cells[7] === 'x')) {
      xWins()
    } else if ((cells[2] === 'x') && (cells[5] === 'x') && (cells[8] === 'x')) {
      xWins()
    } else if ((cells[0] === 'x') && (cells[4] === 'x') && (cells[8] === 'x')) {
      xWins()
    } else if ((cells[2] === 'x') && (cells[4] === 'x') && (cells[6] === 'x')) {
      xWins()
    } else if ((cells[0] === 'o') && (cells[1] === 'o') && (cells[2] === 'o')) {
      oWins()
    } else if ((cells[3] === 'o') && (cells[4] === 'o') && (cells[5] === 'o')) {
      oWins()
    } else if ((cells[6] === 'o') && (cells[7] === 'o') && (cells[8] === 'o')) {
      oWins()
    } else if ((cells[0] === 'o') && (cells[3] === 'o') && (cells[6] === 'o')) {
      oWins()
    } else if ((cells[1] === 'o') && (cells[4] === 'o') && (cells[7] === 'o')) {
      oWins()
    } else if ((cells[2] === 'o') && (cells[5] === 'o') && (cells[8] === 'o')) {
      oWins()
    } else if ((cells[0] === 'o') && (cells[4] === 'o') && (cells[8] === 'o')) {
      oWins()
    } else if ((cells[2] === 'o') && (cells[4] === 'o') && (cells[6] === 'o')) {
      oWins()
    } else if (uniqueCount === 9) {
      isTie()
    }
  }
}

const onGetGames = event => {
  event.preventDefault()
  api.getGames()
    .then(ui.getGamesSuccess)
    .catch(ui.getGamesFailure)
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
// <h1> element with ID "whoseTurn" updates with whose turn it is. Function would find the number of x and o.
// if num(x)> num(O), player {$X/O}'s turn

module.exports = {
  onCreateGame,
  counter,
  clickedGrid,
  determineWinner,
  onGetGames,
  onShowAGame
}
