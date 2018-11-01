# Scope
Create a single page application that has a tic-tac-toc game board. It allows player 1
and player 2 to play while only one of them is signed in.

The SPA is integrated to API that allows change password and sign out.

Game logic recognizes a tie and win. It keeps tally  of the game win/loss.

# User stories (Breakdown each story into an atomic level)
*** User should be able to login or signup.
*** If logged in, user should be able to change password.
*** If logged in, user should be able to sign out.
* If logged in, user should be able to start a new game.
* The first input will be a X.
* User should be able to input their X or O into the 3x3 grid.
* A clicked grid may not be clicked in that same game.
* The inputs should alternate between X and O.
* Game logic will notify if a player has won.
* Game logic will notify if the game is a tie.
* User will not be able to click the grid once game is won.
* User can refer to tally bar to see number of X wins and number of O wins.
Nice to have
* User will be able to see if its Player 1 or Player 2's turn.

# Wireframe
https://docs.google.com/drawings/d/1mkOMtTo0fu8JDFUIXQL2jdfoaANPHTarb9ZFxLfTZik/edit

# File structure
https://git.generalassemb.ly/ga-wdi-boston/browser-template

# Game engine
* App.js for sign up and sign in authorizations

# Game UI
* a simple 3X3 grid represents the game board.

# Authorization
* Sign up, sign in, sign out and change password created through ajax calls.
* ui.js - handles user interface functionality like authorized view vs unauthorized view. It also handles success and failure messages.
* api.js - handles interactions with the API to sign up, sign in, sign out and change password.
* events.js - handles events created by clients
* app.js - listends for events created through button clicking
* store.js - handles the token info user generates upon signing in

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

# Reference materials
https://css-tricks.com/dont-overthink-flexbox-grids/
# Additional resources
https://git.generalassemb.ly/ga-wdi-boston/game-project
