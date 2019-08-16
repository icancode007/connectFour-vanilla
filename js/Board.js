import Space from './Space';

class Board {
    constuctor(){
        this.rows = 6;
        this.columns = 7;
        this.spaces = this.createSpaces();
    }

    /** 
     * Generates 2D array of spaces. 
     * @return  {Array}     An array of space objects
     */
    createSpaces() {
        const spaces = [];
        for(let x = 0; x < this.columns; x++) {
            for(let y = 0; y < this.rows; y++) {
                spaces.push(new Space(x, y))
            }
        }
    }

    drawHTMLBoard() {
        for (let i in this.spaces()) {
            for (let j in i) {
                this.spaces.drawSvgSpace();
            }
        }
    }
}

export default Board;
