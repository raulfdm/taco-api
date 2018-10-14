const { writeFile } = require('fs');

const data = require('../references/TACO_formatted.json');
const {
  keyToUnitObject,
  concatenateEnergy,
  mergeProperties,
  removeEmptyValues,
} = require('./converterFunctions');

/**
 *
 * @param {*} food - Food object
 * @description - change from {<prop-name_unit> : <value>} to {<prop-name>: {qty: <value>, unit: <unit>}}
 */
const _normalizeUnits = food => {
  const keys = Object.keys(food);
  const keysToIgnore = ['energy_kcal', 'energy_kj', 'humidity_percentage'];
  const finalData = keys.reduce(
    (result, currentKey) =>
      Object.assign(
        {},
        result,
        keyToUnitObject(currentKey, food[currentKey], keysToIgnore)
      ),
    {}
  );

  return finalData;
};

/**
 *
 * @param {*} food - Food Object
 * @description - merge all fatty acids in a single prop
 */
const _mergeFattyAcids = food =>
  mergeProperties(food, {
    mergeKeys: [
      'saturated',
      'monounsaturated',
      'polyunsaturated',
      '12:0',
      '14:0',
      '16:0',
      '18:0',
      '20:0',
      '22:0',
      '24:0',
      '14:1',
      '16:1',
      '18:1',
      '20:1',
      '18:2 n-6',
      '18:3 n-3',
      '20:4',
      '20:5',
      '22:5',
      '22:6',
      '18:1t',
      '18:2t',
    ],
    finalKey: 'fatty_acids',
  });

/**
 *
 * @param {*} food - Food Object
 * @description - merge all amino acids in a single prop
 */
const _mergeAminoAcids = food =>
  mergeProperties(food, {
    mergeKeys: [
      'tryptophan',
      'threonine',
      'isoleucine',
      'leucine',
      'lysine',
      'methionine',
      'cystine',
      'phenylalanine',
      'tyrosine',
      'valine',
      'arginine',
      'histidine',
      'alanine',
      'aspartic',
      'glutamic',
      'glycine',
      'proline',
      'serine',
    ],
    finalKey: 'amino_acids',
  });

const _writeCallback = err => {
  if (err) {
    console.error(err);
  } else {
    console.log('Success! :)');
  }
};

const normalizedData = data
  .map(removeEmptyValues)
  .map(_normalizeUnits)
  .map(concatenateEnergy)
  .map(_mergeFattyAcids)
  .map(_mergeAminoAcids);

const formattedJsonData = JSON.stringify(normalizedData, null, 2);

writeFile('final.json', formattedJsonData, _writeCallback);
