module.exports = Phrase;

String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
};

function Phrase(content) {
    this.content = content;
    
    this.louder = function() {
        return this.content.toUpperCase();
    };
    
    this.processedContent = function processedContent() {
        return this.letters().toLowerCase();
    };
    
    this.letters = function letters() {
        return Array.from(this.content).filter(c => c.match(/[a-z]/i)).join("");
    };
    
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    };
}