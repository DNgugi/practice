// listOf Array, listOf Array -> Array
// Update inventory based on a fresh delivery. The returned inventory array should be in alphabetical order by item.

const updateInventory = (inventory, delivery) => {
  let count = delivery.length;
  while (count > 0) {
      let currentItem = delivery.shift();
    //Check if it is in inventory
      if (itemExists(currentItem, inventory)) {
      inventory = updateItem(currentItem, inventory);
    } else {
      inventory = addItem(currentItem, inventory);
    }

    count--;
  }

  //if it us, update the qty
  //if it isn't, add it
    return inventory.sort((a, b) => {
      if (a[1] === b[1]) {
        return 0;
      } else {
        return a[1] < b[1] ? -1 : 1;
      }
  });
};

const itemExists = (item, inventory) => {
  for (i of inventory) {
    if (i[1] == item[1]) {
      return true;
    } else {
      return false;
    }
  }
};

const updateItem = (item, inventory) => {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i][1] == item[1]) {
      inventory[i] = [inventory[i][0] + item[0], item[1]];
    }
  }
  return inventory;
};

const addItem = (item, inventory) => {
  return [...inventory, item];
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
