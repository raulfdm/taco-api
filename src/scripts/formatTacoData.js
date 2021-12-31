const { writeFile } = require('fs');
const { resolve } = require('path');

const data = require('../references/TACO_formatted.json');
const categories = require('../src/data/categoryList.json');

const {
  keyToUnitObject,
  concatenateEnergy,
  mergeProperties,
  removeEmptyValues,
} = require('./converterFunctions');

const categoriesMAP = categories.reduce((map, currentCategory) => {
  map.set(currentCategory.category, currentCategory.id);
  return map;
}, new Map());

/**
 *
 * @param {*} food - Food object
 * @description - change from {<prop-name_unit> : <value>} to {<prop-name>: {qty: <value>, unit: <unit>}}
 */
const _normalizeUnits = (food) => {
  const keys = Object.keys(food);
  const keysToIgnore = ['energy_kcal', 'energy_kj', 'humidity_percentage'];
  const finalData = keys.reduce(
    (result, currentKey) => ({
      ...result,
      ...keyToUnitObject(currentKey, food[currentKey], keysToIgnore),
    }),
    {}
  );

  return finalData;
};

/**
 *
 * @param {*} food - Food Object
 * @description - merge all fatty acids in a single prop
 */
const _mergeFattyAcids = (food) =>
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
const _mergeAminoAcids = (food) =>
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

/**
 *
 * @param {*} food - Food Object
 * @description - All food were measured by 100g
 */
const _addBase = (food) => ({
  ...food,
  base_qty: 100,
  base_unit: 'g',
});

const _writeCallback = (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Success! :)');
  }
};

const replaceCategoryToId = ({ category, ...rest }) => ({
  ...rest,
  category_id: categoriesMAP.get(category),
});

const _mergeAttributes = (food) =>
  mergeProperties(food, {
    mergeKeys: [
      'humidity',
      'protein',
      'lipid',
      'cholesterol',
      'carbohydrate',
      'fiber',
      'ashes',
      'calcium',
      'magnesium',
      'phosphorus',
      'iron',
      'sodium',
      'potassium',
      'copper',
      'zinc',
      'retinol',
      'thiamine',
      'riboflavin',
      'pyridoxine',
      'niacin',
      'energy',
      'fatty_acids',
      'amino_acids',
      'manganese',
    ],
    finalKey: 'attributes',
  });

const normalizedData = data
  .map(removeEmptyValues)
  .map(_normalizeUnits)
  .map(_addBase)
  .map(replaceCategoryToId)
  .map(concatenateEnergy)
  .map(_mergeFattyAcids)
  .map(_mergeAminoAcids)
  .map(_mergeAttributes);

const formattedJsonData = JSON.stringify(normalizedData, null, 2);

const PATH = resolve(__dirname, '../src/data/foodList.json');
writeFile(PATH, formattedJsonData, _writeCallback);
