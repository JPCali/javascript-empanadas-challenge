import { fn } from "./main.js";

describe("Function fn - Input Parameter Test Cases", () => {
   test("Case: fn(1, 1, 1) - Expected Result: 14", () => {
      const result = fn(1, 1, 1);
      expect(result).toBe(14);
   });

   test("Case: fn(3, 3, 0) - Expected Result: 26", () => {
      const result = fn(3, 3, 0);
      expect(result).toBe(26);
   });

   test("Case: fn(2, 0, 1) - Expected Result: 14", () => {
      const result = fn(2, 0, 1);
      expect(result).toBe(14);
   });

   test("Case: fn(9, 10, 11) - Expected Result: 142", () => {
      const result = fn(9, 10, 11);
      expect(result).toBe(142);
   });

   test("Case: fn(11, 10, 9) - Expected Result: 139", () => {
      const result = fn(11, 10, 9);
      expect(result).toBe(139);
   });

   test("Throw error on negative input value: fn(-1, 3, 1)", () => {
      expect(() => fn(-1, 3, 1)).toThrow();
   });

   test("Throws error when the total sum of inputs (2+2+1) is not a multiple of 3: fn(2, 2, 1)", () => {
      expect(() => fn(2, 2, 1)).toThrow();
   });

   test("Throws error when the total sum of inputs (15+15+20) is not less than 40: fn(15, 15, 20)", () => {
      expect(() => fn(15, 15, 20)).toThrow();
   });
});
