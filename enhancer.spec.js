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
      expect(enhancer.success(item1).name).toBe('["PEN"] Rave Sword');
    });
  });

  describe("repair()", () => {
    it("should repair the durability to 100.", () => {
      const item = {
        originalName: "Longclaw",
        name: "Longclaw",
        type: "weapon",
        durability: 80,
        enhancement: 0
      };

      const item2 = {
        originalName: "Axe",
        name: "Axe",
        type: "weapon",
        durability: 83,
        enhancement: 0
      };

      const actual = enhancer.repair(item);
      const actual2 = enhancer.repair(item2);

      expect(actual.durability).toBe(100);
      expect(actual2.durability).toBe(100);
    });
  });

  describe("fail()", () => {
    const item1 = {
      originalName: "Axe",
      name: "Axe",
      type: "weapon",
      durability: 83,
      enhancement: 20
    };
    const item2 = {
      originalName: "Axe",
      name: "Axe",
      type: "weapon",
      durability: 83,
      enhancement: 17
    };
    it("should change the name if enhancement is greater than 16", () => {
      expect(enhancer.fail(item1).name).toBe('["TET"] Axe');
      expect(enhancer.fail(item2).name).toBe('["PRI"] Axe');
    });

    const item3 = {
      originalName: "Axe",
      name: "Axe",
      type: "weapon",
      durability: 83,
      enhancement: 11
    };
    const item4 = {
      originalName: "Axe",
      name: "Axe",
      type: "weapon",
      durability: 83,
      enhancement: 115
    };

    it("should decrease durability by 5 if enhancement is less than 14", () => {
      expect(enhancer.fail(item3).durability).toBe(78);
    });

    it("should decrease durability by 10 if enhancement is greater than or equal to 14", () => {
      expect(enhancer.fail(item4).durability).toBe(73);
    });
  });
});
