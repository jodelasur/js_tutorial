# Phrase object (with palindrome detector)

This is Jodel Asur's take on a sample NPM module created in 
[*Learn Enough JavaScript to Be Dangerous*](https://www.learnenough.com/javascript-tutorial) by Michael Hartl.

The module can be used as follows:

```
$ npm install --global jodelasur-palindrome
$ vim test.js
let Phrase = require("jodelasur-palindrome");
let napoleonsLament = new Phrase("Able was I, ere I saw Elba.");
console.log(napoleonsLament.palindrome());
$ node test.js
true
```
