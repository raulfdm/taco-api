const {
  keyToUnitObject,
  concatenateEnergy,
  mergeProperties,
} = require('./converterFunctions');
const { model_1, model_2 } = require('./__models__/taco_formatted');

describe('fn: keyToUnitObject', () => {
  it('should return an object', () => {
    expect(keyToUnitObject('test_g', 1)).toBeInstanceOf(Object);
  });

  it('should return an object containing a single key', () => {
    expect(Object.keys(keyToUnitObject('test_g', 1)).length).toBe(1);
  });

  it('should the uniq key be the same as passed but without _*', () => {
    expect(Object.keys(keyToUnitObject('test_g', 1))[0]).toBe('test');
  });
  it('should the uniq key be the same as passed but without _* (another case)', () => {
    expect(Object.keys(keyToUnitObject('protein_mcg', 1))[0]).toBe('protein');
  });

  describe('key value (e.g. {protein : >{}< })', () => {
    const result = keyToUnitObject('protein_mcg', 1);

    it('should be an object', () => {
      expect(result.protein).toBeInstanceOf(Object);
    });
    describe('qty property', () => {
      it('should has the property "qty"', () => {
        expect(result.protein).toHaveProperty('qty');
      });
      it('should be the value received', () => {
        expect(result.protein.qty).toBe(1);
      });

      it('should be the value received (another case)', () => {
        const result = keyToUnitObject('lipids_g', 100);
        expect(result.lipids.qty).toBe(100);
      });
    });

    describe('unit property', () => {
      it('should has the property "unit"', () => {
        expect(result.protein).toHaveProperty('unit');
      });

      it('should unit be the value after underscore', () => {
        expect(result.protein.unit).toBe('mcg');
      });

      it('should unit be the value after underscore', () => {
        const result = keyToUnitObject('lipids_g', 100);
        expect(result.lipids.unit).toBe('g');
      });
    });
  });

  describe('non underscore value', () => {
    describe('Return the same value sent', () => {
      describe('case 1', () => {
        const key = 'description';
        const value = 'Carne de vaca';
        const result = keyToUnitObject(key, value);

        it('should return an object with the same key sent', () => {
          expect(result).toHaveProperty(key);
        });
        it('should the value of the key be the same sent', () => {
          expect(result[key]).toBe(value);
        });
      });

      describe('case 2', () => {
        const key = 'category';
        const value = 'Some awesome food';
        const result = keyToUnitObject(key, value);

        it('should return an object with the same key sent', () => {
          expect(result).toHaveProperty(key);
        });
        it('should the value of the key be the same sent', () => {
          expect(result[key]).toBe(value);
        });
      });
    });
  });

  describe('param: ignoreCases', () => {
    it('should not convert when send some key in array', () => {
      const key = 'energy_kcal';
      const value = 100;
      const result = keyToUnitObject(key, value, ['energy_kcal']);
      expect(result).toEqual({
        [key]: value,
      });
    });

    it('should not convert when send some key in array (another case)', () => {
      const key = 'humidity_percentage';
      const value = 11;
      const result = keyToUnitObject(key, value, ['humidity_percentage']);
      expect(result).toEqual({
        [key]: value,
      });
    });
  });
});

describe('fn: concatenateEnergy', () => {
  it('should return an object', () => {
    expect(concatenateEnergy(model_1)).toBeInstanceOf(Object);
  });

  it("should return an object with the property 'energy'", () => {
    expect(concatenateEnergy(model_1)).toHaveProperty('energy');
  });

  describe('energy property', () => {
    const result = concatenateEnergy(model_1).energy;
    it('should the value be an object', () => {
      expect(result).toBeInstanceOf(Object);
    });

    describe('kcal', () => {
      it("should the value contains the property 'kcal'", () => {
        expect(result).toHaveProperty('kcal');
      });
      it('should kcal has the same value as energy_kcal', () => {
        expect(result.kcal).toBe(model_1.energy_kcal);
      });
    });

    describe('kj', () => {
      it("should the value contains the property 'kj'", () => {
        expect(result).toHaveProperty('kj');
      });
      it('should kj has the same value as energy_kj', () => {
        expect(result.kj).toBe(model_1.energy_kj);
      });
    });
  });

  it('should the object return does not contains energy_kcal', () => {
    expect(concatenateEnergy(model_1)).not.toHaveProperty('energy_kcal');
  });

  it('should the object return does not contains energy_kj', () => {
    expect(concatenateEnergy(model_1)).not.toHaveProperty('energy_kj');
  });

  it('should contain all other properties', () => {
    const energy = {
      kcal: 124,
      kj: 517,
    };
    const expected = Object.assign({}, model_1, { energy });
    delete expected.energy_kcal;
    delete expected.energy_kj;

    expect(concatenateEnergy(model_1)).toEqual(expected);
  });

  it('should contain all other properties (model 2)', () => {
    const energy = {
      kcal: 192,
      kj: 802,
    };
    const expected = Object.assign({}, model_2, { energy });
    delete expected.energy_kcal;
    delete expected.energy_kj;

    expect(concatenateEnergy(model_2)).toEqual(expected);
  });
});

describe('fn: mergeProperties', () => {
  describe('param: options', () => {
    it('should throw if does not receive option object', () => {
      expect(() => mergeProperties(model_1)).toThrowError();
    });
    describe('mergeKeys', () => {
      describe('validations', () => {
        it('should throw if mergeKeys isnt an array', () => {
          expect(() => mergeProperties(model_1, { mergeKeys: false })).toThrow(
            /array/gi
          );
        });

        it('should throw if mergeKeys isEmpty', () => {
          expect(() => mergeProperties(model_1, { mergeKeys: [] })).toThrow(
            /empty/gi
          );
        });
      });

      it('should new property value object contain all mergeKeys as properties', () => {
        const mergeKeys = [
          'saturated_g',
          'monounsaturated_g',
          'polyunsaturated_g',
        ];

        const result = mergeProperties(model_1, {
          mergeKeys,
          finalKey: 'testing',
        }).testing;

        expect(result).toHaveProperty('saturated_g');
        expect(result).toHaveProperty('monounsaturated_g');
        expect(result).toHaveProperty('polyunsaturated_g');
      });

      it('should new property value object contain all mergeKeys as properties (another case)', () => {
        const mergeKeys = ['test1', 'test2'];

        const result = mergeProperties(
          {
            test1: false,
            test2: 10,
            others: [1, 2, 3],
          },
          {
            mergeKeys,
            finalKey: 'fat',
          }
        ).fat;

        expect(result).toHaveProperty('test1');
        expect(result).toHaveProperty('test2');
      });

      it('should the result doest not contain the "mergeKey" as properties', () => {
        const before = {
          name: 'raul',
          age: 26,
          birthday_day: 14,
          birthday_year: 1991,
        };
        const result = mergeProperties(before, {
          mergeKeys: ['birthday_day', 'birthday_year'],
          finalKey: 'birthday',
        });

        expect(result).not.toHaveProperty('birthday_day');
        expect(result).not.toHaveProperty('birthday_year');
      });

      it('should the result doest not contain the "mergeKey" as properties (another case)', () => {
        const before = {
          id: 1,
          description: 'maculele',
          width: 100,
          height: 200,
        };
        const result = mergeProperties(before, {
          mergeKeys: ['width', 'height'],
          finalKey: 'size',
        });

        expect(result).not.toHaveProperty('width');
        expect(result).not.toHaveProperty('height');
      });
    });

    describe('finalKeys', () => {
      describe('validations', () => {
        it('should throw if "finalKeys" isnt typeof string', () => {
          expect(() =>
            mergeProperties(model_1, { mergeKeys: ['test'], finalKey: 2 })
          ).toThrow(/string/gi);
        });

        it('should throw if mergeKeys isEmpty', () => {
          expect(() =>
            mergeProperties(model_1, { mergeKeys: ['test'] })
          ).toThrow();
        });
      });

      it('should contain a new property passed as "finalKey"', () => {
        const result = mergeProperties(model_1, {
          mergeKeys: ['saturated_g', 'monounsaturated_g', 'polyunsaturated_g'],
          finalKey: 'fat',
        });
        expect(result).toHaveProperty('fat');
      });

      it('should contain a new property passed as "finalKey" (another case)', () => {
        const result = mergeProperties(model_1, {
          mergeKeys: ['saturated_g', 'monounsaturated_g', 'polyunsaturated_g'],
          finalKey: 'testing',
        });
        expect(result).toHaveProperty('testing');
      });
    });
  });

  it('should return an object', () => {
    expect(
      mergeProperties(model_1, {
        mergeKeys: ['saturated_g', 'monounsaturated_g', 'polyunsaturated_g'],
        finalKey: 'Fat',
      })
    ).toBeInstanceOf(Object);
  });

  it('should new property value be an object', () => {
    const result = mergeProperties(model_1, {
      mergeKeys: ['saturated_g', 'monounsaturated_g', 'polyunsaturated_g'],
      finalKey: 'testing',
    });
    expect(result.testing).toBeInstanceOf(Object);
  });

  it('should the result contain all other properties sent', () => {
    const before = {
      name: 'raul',
      age: 26,
      birthday_day: 14,
      birthday_year: 1991,
    };
    const result = mergeProperties(before, {
      mergeKeys: ['birthday_day', 'birthday_year'],
      finalKey: 'birthday',
    });

    expect(result).toHaveProperty('name');
    expect(result.name).toBe('raul');

    expect(result).toHaveProperty('age');
    expect(result.age).toBe(26);
  });

  it('should the result contain all other properties sent (another case)', () => {
    const before = {
      id: 1,
      description: 'maculele',
      width: 100,
      height: 200,
    };
    const result = mergeProperties(before, {
      mergeKeys: ['width', 'height'],
      finalKey: 'size',
    });

    expect(result).toHaveProperty('id');
    expect(result.id).toBe(1);

    expect(result).toHaveProperty('description');
    expect(result.description).toBe('maculele');
  });

  describe('merged values', () => {
    it('should values merge be the same sent', () => {
      const before = {
        id: 1,
        description: 'maculele',
        width: {
          min: 100,
          max: 150,
        },
        height: 200,
      };
      const result = mergeProperties(before, {
        mergeKeys: ['width', 'height'],
        finalKey: 'size',
      });

      expect(result.size.width).toEqual({
        min: 100,
        max: 150,
      });

      expect(result.size.height).toBe(200);
    });

    it('should values merge be the same sent (another case)', () => {
      const before = {
        _id: new Date().getSeconds(),
        name: 'maculele',
        amount: 3000.0,
        numbers: [1, 2, 4],
      };

      const result = mergeProperties(before, {
        mergeKeys: ['amount', 'numbers'],
        finalKey: 'size',
      });

      expect(result.size.amount).toBe(3000.0);

      expect(result.size.numbers).toEqual([1, 2, 4]);
    });
  });

  it('should throw if the object does not contain some key', () => {
    const before = {
      id: 1,
      description: 'maculele',
      width: {
        min: 100,
        max: 150,
      },
      height: 200,
    };
    expect(() =>
      mergeProperties(before, {
        mergeKeys: ['test', 'hi'],
        finalKey: 'size',
      })
    ).toThrow();
  });
});
