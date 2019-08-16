class Token {
    constructor(owner, index) {
       this.color = owner.color;
       this.id = `token-${index}-owner`;
       this.dropped = false;
    }
    get htmlToken(){
        return this.drawHTMLToken();
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