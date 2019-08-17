import Board from "./Board";

class Game {
    constructor() {
        this.board = new Board;
        this.players = this.createPLayers();
    }

    get activePlayer() {
        return this.players.filter(p => !p.hasTurn);
    }

    createPLayers() {
        for(let player = 0; player < 2; player++) {
            players.push(
                new Player(
                    prompt( "Name for player? :" ), 
                    prompt( "which color do you like? :"),
                    player === 0 && true,
                    player === 0 && true,
                )
            );
        }
    }

    /**
     * Branches code, depending on what key player presses
     * @param   {Object}    e - Keydown event object
     */
    handleKeydown(event){
        if(!this.ready) return;
    
        switch(event.key) {
            case "ArrowLeft":
                return this.activePlayer.activeToken.moveLeft()
            case "ArrowRight":
                return this.activePlayer.activeToken.moveRight()
            case "ArrowDown":
                this.activePlayer.activeToken.()
        }
    }

    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken();
        this.ready = true;
    }
}

export default Game;
