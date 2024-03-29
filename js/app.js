import Game from './Game';

const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
 */
document.getElementById('begin-game')
    .addEventListener('click', () => {
        game.startGame();
        this.style.display = 'none';
        document.getElementById( 'play-area' ).style.opacity = '1';
});

/** 
 * Listens for Key Presses
 */
document.addEventListener('keydown', event => {
    game.handleKeydown(event);
});