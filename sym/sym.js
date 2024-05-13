// The mathematical term symmetric difference of two sets is the set of elements which are in either of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate an expression involving symmetric differences among three elements (A △ B △ C), you must complete one operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.


//ListOf arrays -> array

// Takes two or more arrays and returns an array of their symmetric difference. The returned array must contain only unique values (no duplicates).

// const sym = (loa) => []; //stub

const sym = (...loa) => {
        // 1, 2, 3
    // 2    f t f
    // 3    f f t
    // 4    f f f
    let results = []
    let collection = [...loa[0], ...loa[1]]
    for (el of collection) {
        if (loa[0].includes(el) && loa[1].includes(el)) {
            results.push(el);
        }
    }
    for (item of results) {
        collection.splice(collection.indexOf(item), 1);
    }
    
    return collection.sort()
}

console.log(sym([1, 2, 3], [2, 3, 4]));

module.exports = sym;
