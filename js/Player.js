import Token from './Token';

class Player {
    constructor(name, color, isPlayerOne = false) {
        this.isPlayerOne = isPlayerOne;
        this.name = name;
        this.color = color;
        this.tokens = this.createTokens(21);
        this.hasTurn = false;
    }

    /*
     * Go through the list of all created tokens and filter out any token that has been dropped
     * @returns {array} 
     */
    get unusedTokens() {
        return this.tokens.filter(t => !t.dropped);
    }

    /*
     * Get the first token of the non-used list
     * @return{Token}
     */
    get activeToken() {
        return this.unusedTokens[0];
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