/* eslint-disable camelcase */
const { isArray, isEmpty, omit, isString } = require('lodash');

/**
 *
 * @param {string} key - key of the original format (e.g. protein_g, lipids_g)
 * @param {string} value - value of this key (e.g. 1, 100, "NA")
 * @description This function was created to convert props containing unit in their names:
 * "protein_g": 2.6
 * keyToUnitObject('protein_g', 2.6)
 * {
 *  protein: {
 *    qty: 2.6,
 *  }
 * }
 */
const keyToUnitObject = (key, value, ignoreCases = []) => {
  if (!isArray(ignoreCases)) {
    throw new Error('ignore cases should be an array');
  }

  if (!key.includes('_') || ignoreCases.includes(key)) {
    return {
      [key]: value,
    };
  }
  const newKey = key.replace(/_.*/gi, '');

  /* Find the index of the underscore and add 1 to substring */
  const indexOfUnderscore = key.indexOf('_') + 1;
  /* get the rest after the underscore */
  const unit = key.substr(indexOfUnderscore, key.length);

  return {
    [newKey]: {
      qty: value,
      unit,
    },
  };
};

/**
 *
 * @param {Food} food - Full food object
 * @description - Function to merge energy kcal and kj in a single property
 */
const concatenateEnergy = ({ energy_kcal, energy_kj, ...rest }) => {
  const omittedKeys = ['energy_kcal', 'energy_kj'];

  const energy = {
    energy: {
      kcal: energy_kcal,
      kj: energy_kj,
    },
  };
  return omit({ ...rest, ...energy }, omittedKeys);
};

const mergeProperties = (food, options) => {
  const { mergeKeys = [], finalKey = '' } = options;

  if (isEmpty(options)) {
    throw new Error('Options is required');
  }

  if (!isArray(mergeKeys)) {
    throw new TypeError('mergeKeys should be type of Array');
  } else if (isEmpty(mergeKeys)) {
    throw new Error('mergeKeys should not be empty');
  }

  if (!isString(finalKey)) {
    throw new TypeError('finalKey should be type of String');
  } else if (isEmpty(finalKey)) {
    throw new Error('finalKey should not be empty');
  }

  const existingKeys = mergeKeys.filter((key) => food[key]);

  if (existingKeys.length === 0) {
    return food;
  }
  const newMergedKeysObj = existingKeys.reduce((result, currentKey) => {
    // eslint-disable-next-line no-param-reassign
    result[currentKey] = food[currentKey];
    return result;
  }, {});

  /* Merge original object with the generated one */
  const final = {
    ...food,
    [finalKey]: {
      ...newMergedKeysObj,
    },
  };

  /* Deleting the mergeKeys  */
  return omit(final, existingKeys);
};

const removeEmptyValues = (food) => {
  const keysToRemove = Object.keys(food).filter((key) =>
    isEmpty(food[key] && key)
  );

  return omit(food, keysToRemove);
};

module.exports = {
  concatenateEnergy,
  keyToUnitObject,
  mergeProperties,
  removeEmptyValues,
};
