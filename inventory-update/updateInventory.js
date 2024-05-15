// listOf Array, listOf Array -> Array
// Update inventory based on a fresh delivery. The returned inventory array should be in alphabetical order by item.

const updateInventory = (inventory, delivery) => {
    for (i of delivery) {
        checkInventory(i, inventory);
    }

};

const checkInventory = (item, inventory) => {
    for (i of inventory) {
        if (i.includes(item[1])) {
            return updateItem(item, inventory);
        } else {
            return addItem(item, inventory);
        }
    } 
    return inventory;
};

const updateItem = (item, inventory) => {
    for (i of inventory) {
        if (i.includes(item[1])) {
            i[0] = i[0] + item[0];
        }
    }
    return inventory;
};

const addItem = (item, inventory) => {
  return [...inventory, item].sort();
};

updateInventory(
  [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
  ],
  [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
  ]
);

module.exports = updateInventory;
