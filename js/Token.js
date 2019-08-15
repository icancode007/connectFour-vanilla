class Token {
    constructor(owner, index) {
       this.color = owner.color;
       this.id = `token-${index}-owner`;
       this.dropped = false;
    }
}
export default Token;