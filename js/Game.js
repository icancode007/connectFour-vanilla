import Board from "./Board";

class Game {
    constructor() {
        this.board = new Board;
        this.players = this.createPLayers();
    }

    createPLayers() {
        let players = []
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
}

export default Game;
