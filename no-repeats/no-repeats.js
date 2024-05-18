

//String -> Int;
// Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.

const noRepeats = (str) => {
    if (str == '') {
        return 0;
    }
    //Use sets to store unique numbers
    //Tree traversal arbitrarity-arity tree
    let perms = permutations(str);
    return removeRepetitions(perms).length;

}

// !!!TODO
const permutations = (str) => {
    let chars = str.split('');
    let tree = makeTree(chars);
    //Depth first traversal of tree starting at each node, adding each result to results array
    return dfs(tree);
}

// !!!TODO
const removeRepetitions = (arr) => {
    return [];
}

// !!!TODO
const makeTree = (arr) => {
    return []
}

// !!!TODO
const dfs = (tree) => {
    return []
}


// Examples
// For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

// noRepeats('')//0
// noRepeats('aaa');//0
// noRepeats('aab');//2
// noRepeats('aabb')//8

module.exports = noRepeats;