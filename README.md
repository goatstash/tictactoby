# Tic Tac Toeby

Tic Tac Toeby is a basic version of a classic game set on the wall of a public bathroom.

## Approach to problem (planning)

Initial I started creatin 9 divs to represent the board and writing some basic css code to build a framework for the game.

My Javascript approach to the problem started with toggling between players.
I created a function that had an event listener so when player one clicked on a square that was neither occupied by an "X" or an "O" and "X" would be added to the div textcontent and the active player would switch to player two.

The next step I added all the winning combinations for player one and two in a function.

The third step was creating a function for a draw, it reads if all 9 boxes had text content and if player one or two had not won the game(This was an important function as a player could win on the last turn), and a variable that would display the winner of the game, or that the game is a draw, on the page when winning or draw combinations are met.

The fourth step in Javascript was adding a scoreboard variable that would count the wins for each player and store the count within the textcontent of a <span>.

The fifth step was creating a reset button that would listen for a click and wipe the board when clicked. It also wipes the "Player has won" message from the board.

## Tech Used

I used an image of a wall covered in graffiti found on the internet
font-family" 'Grafitti font'
I've added a song that a friend and I produced that has is repeatetively looped.

## Lessons learnt

Too many lines of code makes trouble shooting difficult, readability is not great.
Using a count system to toggle between players would have been better.
== does not equal but compares.
When help wasn't available and I was mentally blocked I should have spent time on design and stepped away from the problem.

## Future features if I had more time

I have a stop button to stop the music that isn't functional.
A multi layered scored board where it's first player to eleven and win by two and then win eleven sets by two.
For interactive design with hover features, a broken lightbulb faintly flashing.
I wish I produced the song to sound as if it was coming from behind a wall.
I haven't been able to debug an issue in javascript where the players can continue to mark "x" and "o" when a player has already won the game. If reset button isn't clicked to wipe the board two players could win the same game.
