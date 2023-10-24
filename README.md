# R-P-S Game

## Functionality:
- Allows user to pick hero and villain characters
- Then starts rock-paper-scissors (RPS) game: user selects choice while villain's choice is randomly selected
- Play continues until one of the player's health reaches 0
- Zombie round triggers randomly (1 in 4), with slightly different points logic, and zombies health cannot be affected 

## Description of logic:
- Standard character lists are loaded, both require selection before user can continue on to play the game
- Event listener triggers rendering of player pictures and slogans into the DOM, each with 30 initial points, as well as RPS options and button to play the game
- Event listener for game button will trigger:
    - Random assignment of villain round or zombie round 
    - Appending the DOM with the player choice of RPS and randomly generated villain/zombie choice
    - Comparing choices to determine winner (two different functions: villain or zombie), which will update the losing player's points based on the outcome
 
## Further improvements:
- Primarily styling, ex: center the modal regardless of screen/main content size
- Adding responsiveness based on user screen size
- Could also add ability for user to select how many points to play for in each round 

## Link to deployed project:
- https://friendly-figolla-5f731d.netlify.app/

## References: 
- Credit to Disney for Incredibles characters and slogans 
