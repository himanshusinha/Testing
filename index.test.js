const multiply = require("./index");

// Describe Mention multiple test cases inside it
// describe("Multiply", () => {
//   it("2 and 5 multiply equal 10", async () => {
//     expect(multiply(2, 5)).toBe(10); // exact equality
//   });
//   it("2 and 5 multiply not equal 4", async () => {
//     expect(multiply(2, 5)).not.toBe(4); // exact equality
//   });
// });

//TEST SUITE
test("2 and 5 multiply to be equal 10", async () => {
  expect(multiply(2, 5)).toBe(10);
});

test("Object Equality", () => {
  const data = { alpha: "A" };
  data["beta"] = "B";
  expect(data).toEqual({ alpha: "A", beta: "B" });
});
