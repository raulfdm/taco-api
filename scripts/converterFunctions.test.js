const { keyToUnitObject, concatenateEnergy } = require("./converterFunctions");
const { model_1, model_2 } = require("./__models__/taco_formatted");

describe("fn: keyToUnitObject", () => {
  it("should return an object", () => {
    expect(keyToUnitObject("test_g", 1)).toBeInstanceOf(Object);
  });

  it("should return an object containing a single key", () => {
    expect(Object.keys(keyToUnitObject("test_g", 1)).length).toBe(1);
  });

  it("should the uniq key be the same as passed but without _*", () => {
    expect(Object.keys(keyToUnitObject("test_g", 1))[0]).toBe("test");
  });
  it("should the uniq key be the same as passed but without _* (another case)", () => {
    expect(Object.keys(keyToUnitObject("protein_mcg", 1))[0]).toBe("protein");
  });

  describe("key value (e.g. {protein : >{}< })", () => {
    const result = keyToUnitObject("protein_mcg", 1);

    it("should be an object", () => {
      expect(result.protein).toBeInstanceOf(Object);
    });
    describe("qty property", () => {
      it('should has the property "qty"', () => {
        expect(result.protein).toHaveProperty("qty");
      });
      it("should be the value received", () => {
        expect(result.protein.qty).toBe(1);
      });

      it("should be the value received (another case)", () => {
        const result = keyToUnitObject("lipids_g", 100);
        expect(result.lipids.qty).toBe(100);
      });
    });

    describe("unit property", () => {
      it('should has the property "unit"', () => {
        expect(result.protein).toHaveProperty("unit");
      });

      it("should unit be the value after underscore", () => {
        expect(result.protein.unit).toBe("mcg");
      });

      it("should unit be the value after underscore", () => {
        const result = keyToUnitObject("lipids_g", 100);
        expect(result.lipids.unit).toBe("g");
      });
    });
  });

  describe("non underscore value", () => {
    describe("Return the same value sent", () => {
      describe("case 1", () => {
        const key = "description";
        const value = "Carne de vaca";
        const result = keyToUnitObject(key, value);

        it("should return an object with the same key sent", () => {
          expect(result).toHaveProperty(key);
        });
        it("should the value of the key be the same sent", () => {
          expect(result[key]).toBe(value);
        });
      });

      describe("case 2", () => {
        const key = "category";
        const value = "Some awesome food";
        const result = keyToUnitObject(key, value);

        it("should return an object with the same key sent", () => {
          expect(result).toHaveProperty(key);
        });
        it("should the value of the key be the same sent", () => {
          expect(result[key]).toBe(value);
        });
      });
    });
  });

  describe("param: ignoreCases", () => {
    it("should not convert when send some key in array", () => {
      const key = "energy_kcal";
      const value = 100;
      const result = keyToUnitObject(key, value, ["energy_kcal"]);
      expect(result).toEqual({
        [key]: value
      });
    });

    it("should not convert when send some key in array (another case)", () => {
      const key = "humidity_percentage";
      const value = 11;
      const result = keyToUnitObject(key, value, ["humidity_percentage"]);
      expect(result).toEqual({
        [key]: value
      });
    });
  });
});

describe.only("fn: concatenateEnergy", () => {
  it("should return an object", () => {
    expect(concatenateEnergy(model_1)).toBeInstanceOf(Object);
  });

  it("should return an object with the property 'energy'", () => {
    expect(concatenateEnergy(model_1)).toHaveProperty("energy");
  });

  describe("energy property", () => {
    const result = concatenateEnergy(model_1).energy;
    it("should the value be an object", () => {
      expect(result).toBeInstanceOf(Object);
    });

    describe("kcal", () => {
      it("should the value contains the property 'kcal'", () => {
        expect(result).toHaveProperty("kcal");
      });
      it("should kcal has the same value as energy_kcal", () => {
        expect(result.kcal).toBe(model_1.energy_kcal);
      });
    });

    describe("kj", () => {
      it("should the value contains the property 'kj'", () => {
        expect(result).toHaveProperty("kj");
      });
      it("should kj has the same value as energy_kj", () => {
        expect(result.kj).toBe(model_1.energy_kj);
      });
    });
  });

  it("should the object return does not contains energy_kcal", () => {
    expect(concatenateEnergy(model_1)).not.toHaveProperty("energy_kcal");
  });

  it("should the object return does not contains energy_kj", () => {
    expect(concatenateEnergy(model_1)).not.toHaveProperty("energy_kj");
  });

  it("should contain all other properties", () => {
    const energy = {
      kcal: 124,
      kj: 517
    };
    const expected = Object.assign({}, model_1, { energy });
    delete expected.energy_kcal;
    delete expected.energy_kj;

    expect(concatenateEnergy(model_1)).toEqual(expected);
  });

  it("should contain all other properties (model 2)", () => {
    const energy = {
      kcal: 192,
      kj: 802
    };
    const expected = Object.assign({}, model_2, { energy });
    delete expected.energy_kcal;
    delete expected.energy_kj;

    expect(concatenateEnergy(model_2)).toEqual(expected);
  });
});
