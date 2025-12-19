const multiply = require("./index");

// Describe Mention multiple test cases inside it

describe("Multiply", () => {
  it("2 and 5 multiply equal 10", async () => {
    expect(multiply(2, 5)).toBe(10); // exact equality
  });
});

// TEST SUITE
// test("2 and 5 multiply equal 10", async () => {
//   expect(multiply(2, 5)).toBe(10); // exact equality
// });
