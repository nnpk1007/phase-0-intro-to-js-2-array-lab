// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    return cats.pop();
}

function destructivelyRemoveFirstCat() {
    return cats.shift();
}

function appendCat(name) {
    const new_cats = [...cats, name]
    return new_cats
}

function prependCat(name) {
    const new_cats = [name, ...cats];
    return new_cats;
}

function removeLastCat() {
    const new_cats = [...cats];
    new_cats.pop()
    return new_cats;
}

function removeFirstCat() {
    const new_cats = [...cats];
    new_cats.shift();
    return new_cats;
}