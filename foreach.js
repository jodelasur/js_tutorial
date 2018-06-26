let a = ["ant", "bat", "cat", 42];
a.forEach((element) => {
    console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
    console.log(character);
});

let arr = [99, 42, 17, 8];
arr.sort((a, b) => { return a - b; });
arr.forEach((num) => { console.log(num); });