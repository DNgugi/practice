// listOf Array, listOf Array -> Array
// Update inventory based on a fresh delivery. The returned inventory array should be in alphabetical order by item.
// const removeDuplicates = (arr) => {
//   if (arr.length === 0) {
//     return arr;
//   }
//   let set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (!set.has(arr[i])) {
//       set.add(arr[i]);
//     }
//   }
//   return Array.from(set);
// };

const updateInventory = (inventory, delivery) => {
  /**
   * Hint 1

You need to work through each item of the new inventory to see if it exists in the current inventory or not. Remember that the product name is stored as the second element of each sub-array: array[0][1] = "item-name".
Hint 2

If the item exists, you need to add the quantity from the new inventory. If the item doesn’t exist, you need to add the entire item.
Hint 3

Return the completed inventory in alphabetical order.
   */

  for (let item of delivery) {
    let itemName = item[1];
    if (inventory.indexOf(itemName) === -1) {
      inventory.push(item);
    } else {
      inventory[inventory.indexOf(itemName)][0] += item[0];
    }
  }
  return inventory.sort((a, b) => a - b);
};

console.log(
  updateInventory(
    [
      [21, "Bowling Ball"],
      [2, "Dirty Sock"],
      [5, "Microphone"],
    ],
    [
      [3, "Half-Eaten Apple"],
      [67, "Bowling Ball"],
      [7, "Toothpaste"],
    ]
  )
);

module.exports = updateInventory;
