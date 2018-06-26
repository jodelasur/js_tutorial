let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string) {
    return string.toLowerCase().split(/\s+/).join('-')
}

// map: Imperative version
function imperativeMap(states) {
    let urlStates = [];
    states.forEach(function(state) {
        urlStates.push(state.toLowerCase().split(/\s+/).join("-"));
    });
    return urlStates;
}
console.log(imperativeMap(states));

// map: Functional version
function functionalMap(states) {
    return states.map(state => urlify(state));
}
console.log(functionalMap(states));

function createURL(states) {
    return states.map(state => `https://example.com/${urlify(state)}`);
}
console.log(createURL(states));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function functionalSum(array) {
    return array.reduce((total, n) => { return total += n });
}
console.log(functionalSum(numbers));

function functionalLengths(states) {
    return states.reduce((lengths, state) => {
        lengths[state] = state.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));

function functionalProduct(array) {
    return array.reduce((product, n) => { return product *= n}, 1);
}
console.log(functionalProduct(numbers));