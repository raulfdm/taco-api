const isArray = require("lodash.isarray");
const omit = require("lodash.omit");
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
    throw new Error("ignore cases should be an array");
  }

  if (!key.includes("_") || ignoreCases.includes(key)) {
    return {
      [key]: value
    };
  }
  const newKey = key.replace(/_.*/gi, "");

  /* Find the index of the underscore and add 1 to substring */
  const indexOfUnderscore = key.indexOf("_") + 1;
  /* get the rest after the underscore */
  const unit = key.substr(indexOfUnderscore, key.length);

  return {
    [newKey]: {
      qty: value,
      unit
    }
  };
};

/* TODO: Write jsDocs */
const concatenateEnergy = ({ energy_kcal, energy_kj, ...rest }) => {
  const omittedKeys = ["energy_kcal", "energy_kj"];

  const energy = {
    energy: {
      kcal: energy_kcal,
      kj: energy_kj
    }
  };
  return omit(Object.assign({}, rest, { ...energy }), omittedKeys);
};

module.exports = {
  keyToUnitObject,
  concatenateEnergy
};
