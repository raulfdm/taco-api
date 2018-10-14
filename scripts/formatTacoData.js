const { writeFile } = require('fs');
const data = require('../references/TACO_formatted.json');
const { keyToUnitObject, concatenateEnergy } = require('./converterFunctions');

const fixData = () => {
  const normalizedDataByUnit = data.map(food => {
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
  });

  const normalizeEnergy = normalizedDataByUnit.map(concatenateEnergy);
  return JSON.stringify(normalizeEnergy);
};

writeFile('final.json', fixData(), console.log);
