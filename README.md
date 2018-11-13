# Scope
Create a single page application that has a tic-tac-toc game board. It allows player 1
and player 2 to play while only one of them is signed in.

The SPA is integrated to API that allows change password and sign out.

Game logic recognizes a tie and win. It keeps tally  of the game win/loss.

# Wireframe
https://docs.google.com/drawings/d/1mkOMtTo0fu8JDFUIXQL2jdfoaANPHTarb9ZFxLfTZik/edit

# File structure
https://git.generalassemb.ly/ga-wdi-boston/browser-template

# User stories (Breakdown each story into an atomic level)
* User should be able to login or signup.
* If logged in, user should be able to change password.
* If logged in, user should be able to sign out.
* Create an authorized view.
* Create an unauthorized view.
* The first input will be a X.
* User should be able to input their X or O into the 3x3 grid.
* A clicked grid may not be clicked in that same game.
* The inputs should alternate between X and O.
* User will not be able to click the grid once game is won.
* Game logic will notify if a player has won.
* Game logic will notify if the game is a tie.
* If logged in, user should be able to start a new game.
* User can refer to tally bar to see number of X wins and number of O wins.

# Game UI
*** a simple 3X3 grid represents the game board.
*** Hover color change
*** Click to make X's appear.
*** Click to make O's appear
*** Buttons for sign in, sign up, sign out and change password.
*** Buttons for creating new game, show all games and get a game.
      Notes
      Winning if below id's have the same string value (X or O)
      horizontal [1,2,3; 4,5,6; 7,8,9;]
      vertical [1,4,7; 2,5,8; 3,6,9]
      diagonals [1,5,9; 3,5,7]

# Authorization
*** Sign up, sign in, sign out and change password created through ajax calls.
*** ui.js - handles user interface functionality like authorized view vs unauthorized view. It also handles success and failure messages.
*** api.js - handles interactions with the API to sign up, sign in, sign out and change password.
*** events.js - handles events created by clients
*** app.js - listens for events created through button clicking
*** store.js - handles the token info user generates upon signing in
* use reset method to clear forms after success.


# Game engine
* App.js for sign up and sign in authorizations
* Once signed in, the user can start a new game by clicking a button.
* A new game with unique id is generated in the server.
* The gameboard becomes active
* First click on the grid makes a 'X' appear
* Counts number of unique clicks on the game board and set it to uniqueCount
* Odd number of uniqueCount = X on the board.
* Even number of uniqueCount = O on the board.
* If numbers of grids with strings(uniqueCount) >= 5, run a function to check for winner
* 8 winning conditions are looped through to check if either player has won.
* If uniqueCount = 9 and no winner has been determined, the game is a tie.
* The player can click 'start a new game' to start another game.
* Clear form fields after sign in, sign out, change password
* Create update API
* game.cells of each unique game should update the server and store this data for future reference.


Work left
* Unable to get a unique game with ID through the show a game button
* Show games should give the result not in a console.log
* remove console.logs


# Notes
Winning if below id's have the same string value (X or O)
horizontal [1,2,3; 4,5,6; 7,8,9;]
vertical [1,4,7; 2,5,8; 3,6,9]
diagonals [1,5,9; 3,5,7]

# Game UI
* a simple 3X3 grid represents the game board.
* Hover color change
* Click to make X's appear.
* Click to make O's appear
* Buttons for sign in, sign up, sign out and change password.
* Buttons for creating new game, show all games and get a game.

# BUGS
* Cannot start game, change password or sign out after sign up because
  there's no token
* Have to refresh page and sign in with the created login credentials for Token
* The game board correlates with cells array in the function. The values of
  each grid is saved temporarily but never saved in the server
* 'Get games' gets all games created in console.log but the cells arrays are
  all empty and over key is false for all game.
* Show a game with ID gets the game but its cells array is empty and over key
  is false.
* Need to Create Update API
* Form fields need to be emptied out after 'Sign out'
* Console.logs need to be commented out or deleted.
* Need to update README.MD once above changes are made.
* Git merge, push and grunt deploy to update
  https://rakshyakc.github.io/tic-tac-toe-client//


# Project API
https://git.generalassemb.ly/ga-wdi-boston/game-project-api

# User API
https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/user.md

# Game API
https://git.generalassemb.ly/ga-wdi-boston/game-project-api/blob/master/docs/game.md

# Deploy
https://git.generalassemb.ly/ga-wdi-boston/gh-pages-deployment-guide
# Tests

# Future features

# Additional resources
https://git.generalassemb.ly/ga-wdi-boston/game-project

# Reference materials used
https://css-tricks.com/dont-overthink-flexbox-grids/
https://stackoverflow.com/questions/17097947/jquery-using-a-variable-as-a-selector
<<<<<<< HEAD


// Questions

* API questions - how should my game be stored in the API? How can I make sure a game creates a new ID?
* What does it mean to fetch all user's games? To show in console? To create an object with details of games played or is it supposed to be on screen?!
* Where do I create player-x? Or do I set it up somewhere after a sign in success?

# For resubmission
  * Toggle for forms
  * Border transparent
  * Game history
=======
>>>>>>> feature
