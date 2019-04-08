const enhancer = require("./enhancer");

describe("enhancer.js", () => {
  describe("succeed()", () => {
    it("should return null if no item is passed", () => {
      expect(enhancer.success()).toBe(null);
    });

    it("should enhance the object", () => {
      const item = {
        originalName: "Longclaw",
        name: "[+7] Longclaw",
        type: "weapon",
        durability: 80,
        enhancement: 7
      };

      const actual = enhancer.success(item);

      const expected = {
        originalName: "Longclaw",
        name: "[+8] Longclaw",
        type: "weapon",
        durability: 80,
        enhancement: 8
      };

      expect(actual).toEqual(expected);
    });

    it("should return the correct enhancement", () => {
      const item1 = {
        name: "Rave Sword",
        type: "weapon",
        durability: 80,
        enhancement: 19
      };

      expect(enhancer.success(item1).enhancement).toBe(20);
      expect(enhancer.success(item1).name).toBe('["PEN"] Rave Sword')
    });
  });
});
