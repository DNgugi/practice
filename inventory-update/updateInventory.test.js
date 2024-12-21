const updateInventory = require("./updateInventory.js");

// test('', () => {
//     expect().toEqual(expect.arrayContaining([]))
// })

test("basic handling of valid input", () => {
  expect(
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
  ).toEqual(
    expect.arrayContaining([
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"],
    ])
  );
});

test('2nd test', () => {
    expect(
      updateInventory(
        [
          [0, "Bowling Ball"],
          [0, "Dirty Sock"],
          [0, "Hair Pin"],
          [0, "Microphone"],
        ],
        [
          [1, "Hair Pin"],
          [1, "Half-Eaten Apple"],
          [1, "Bowling Ball"],
          [1, "Toothpaste"],
        ]
      )
    ).toEqual(
      expect.arrayContaining([
        [1, "Bowling Ball"],
        [0, "Dirty Sock"],
        [1, "Hair Pin"],
        [1, "Half-Eaten Apple"],
        [0, "Microphone"],
        [1, "Toothpaste"],
      ])
    );
})

test("3rd test", () => {
  expect(
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
    )
  ).toEqual(
    expect.arrayContaining([
      [88, "Bowling Ball"],
      [2, "Dirty Sock"],
      [3, "Hair Pin"],
      [3, "Half-Eaten Apple"],
      [5, "Microphone"],
      [7, "Toothpaste"],
    ])
  );
});