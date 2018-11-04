'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

import 'bootstrap'

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./assets/scripts/app.js')

// styles
require('./assets/styles/index.scss')

// Adding functionality to show hidden div of grid.


// winning
// horizontal [1,2,3; 4,5,6; 7,8,9;]
// vertical [{1,4,7}, {2,5,8}, {3,6,9}]
// diagonals [{1,5,9}, {3,5,7}]
