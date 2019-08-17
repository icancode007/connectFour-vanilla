class Token {
    constructor(owner, index) {
       this.color = owner.color;
       this.id = `token-${index}-owner`;
       this.dropped = false;
       this.columnLocation = 0;
       this.tokenWidth = 76;
    }
    get htmlToken(){
        return this.drawHTMLToken();
    }

    /** 
     * Gets left offset of html element.
     * @return  {number}   Left offset of token object's htmlToken.
     */
    get offsetLeft() {
       return this.htmlToken.offsetLeft;
    }

    /** 
     * Moves html token one column to left.
     */
    moveLeft() {
    if(this.columnLocation === 0) return;
        const self = document.getElementById(this.id);
        self.setAttribute('style', `left: ${this.offsetLeft - this.tokenWidth}`);
        this.columnLocation--;   
    }

    /** 
     * Moves html token one column to right.
     */
    moveRight() {
        const self = document.getElementById( this.id );
        if (this.columnLocation === 6) return;
        self.setAttribute( 'style', `left: ${this.offsetLeft + this.tokenWidth}`);
        this.columnLocation++;
    }

    /** 
     * Drops html token into targeted board space.
     * @param   {Object}   target - Targeted space for dropped token.
     * @param   {function} reset  - The reset function to call after the drop animation has completed.
     */
    drop(target, reset) {
      this.dropped = true;
      $( this.htmlToken ).animate( {
          top: ( target.y * target.diameter )
      }, 750, 'easeOutBounce', reset );
    }

    drawHTMLToken() {
     const div = document.createElement('div');
     document.getElementById('game-board-underlay').appendChild(div);
     div.setAttribute('id', this.id);
     div.setAttribute('class', 'token');
     div.setAttribute('style', `background-color:${this.color}`);
    }
}
export default Token;