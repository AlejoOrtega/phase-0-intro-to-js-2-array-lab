// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]

let destructivelyAppendCat = catName => cats.push(catName);

let destructivelyPrependCat = catName => cats.unshift(catName);

let destructivelyRemoveLastCat = () => cats.pop();

let destructivelyRemoveFirstCat = () => cats.shift();

let appendCat = catName => {
    let newCats = [...cats, catName]
    return newCats;
}

let prependCat = catName => {
    let newCats = [catName, ...cats]
    return newCats;
}

let removeLastCat = () => {
    let newCats = cats.slice(0, cats.length - 1);
    return newCats;
}
let removeFirstCat = () => {
    let newCats = cats.slice(1, cats.length);
    return newCats;
};