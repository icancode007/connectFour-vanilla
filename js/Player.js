import Token from './Token';

class Player {
    constructor(name, color, isPlayerOne = false, hasTurn = false) {
        this.isPlayerOne = isPlayerOne;
        this.name = name;
        this.color = color;
        this.token = this.createTokens(21);
    }

    /**
     * Creates token objects for player
     * @param {number} Number of token objects to be created
     * @returns {Array} An array of the newly created token objects
     */
    createTokens(number) {
        let tokens = [];
        for(let i = 0; i < number; i++) {
           tokens.push(new Token(this, i));
        }
        return tokens;
    }
}