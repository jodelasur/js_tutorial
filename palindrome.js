String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
};

String.prototype.blank = function() {
    return this.match(/^\s+$/g);
};

function Phrase(content) {
    this.content = content;
    
    this.louder = function() {
        return this.content.toUpperCase();
    };
    
    this.processedContent = function processedContent() {
        return this.content.toLowerCase();
    };
    
    this.palindrome = function palindrome() {
        return this.processedContent() === this.processedContent().reverse();
    };
}