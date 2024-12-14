# Tile Flip Game
A browser-based tile-matching game where players flip tiles to find pairs with matching images. 
The goal is to match all pairs of tiles in the fewest moves possible.

## Features
- **Dynamic Tile Scrambling**: 
  - Tiles are randomly shuffled on the board each time the game loads.
- **Interactive Gameplay**:
  - Players can click tiles to reveal their images.
  - If two tiles do not match, they flip back automatically after a brief delay.
- **Event Handling**:
  - Uses JavaScript event listeners for responsive gameplay.
- **Real-Time Updates**:
  - Tracks the state of flipped tiles and updates the game board dynamically.

## Technologies
- **HTML**: Provides the structure of the game board and tiles.
- **CSS**: Styles the game board, tiles, and animations.
- **JavaScript**: Implements game logic, including tile scrambling, matching, and flipping.

## How to Run
1. Open the flipGame_txt.html file in a web browser.
2. Tiles will be randomly scrambled on the game board.
3. Click a tile to flip it and reveal its image.
4. Click a second tile:
   - If the images match, both tiles remain flipped.
   - If they don’t match, both tiles flip back after 1 second.
5. Continue flipping tiles until all pairs are matched.

## About This Project
This program was developed as part of an assignment for my programming class. 
The folder names and structure reflect the required naming convention for class submissions.