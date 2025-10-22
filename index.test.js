const multiply = require("./index");

// TEST SUITE
// first parameter is description of the test suite
// second parameter is a async callback function which contains the actual test cases

describe("Multiply Test", () => {
  it("2 and 5 multiply equal to 10", async () => {
    expect(multiply(2, 5)).toBe(10); // exact equality ===
  });

  it("2 and 5 multiply not equal to 8", async () => {
    expect(multiply(2, 5)).not.toBe(8);
  });
});
// test("2 and 5 multiply equal to 10", async () => {
//   expect(multiply(2, 5)).toBe(10);
// });

test("Object Equality", () => {
  const data = { alpha: "A" };
  data["beta"] = "B";
  expect(data).toEqual({ alpha: "A", beta: "B" });
});
