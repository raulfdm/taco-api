const lodash = require('lodash');
const { writeFile } = require('fs');
const { resolve } = require('path');

const AG = require('./taco-ag.json');
const AMINO = require('./taco-amino.json');
const ALL_FOOD = require('./taco-general.json');

// Default Fatty acids
const emptyAG = {
  saturated_g: '',
  monounsaturated_g: '',
  polyunsaturated_g: '',
  '12:0_g': '',
  '14:0_g': '',
  '16:0_g': '',
  '18:0_g': '',
  '20:0_g': '',
  '22:0_g': '',
  '24:0_g': '',
  '14:1_g': '',
  '16:1_g': '',
  '18:1_g': '',
  '20:1_g': '',
  '18:2 n-6_g': '',
  '18:3 n-3_g': '',
  '20:4_g': '',
  '20:5_g': '',
  '22:5_g': '',
  '22:6_g': '',
  '18:1t_g': '',
  '18:2t_g': '',
};

// Default Amino
const emptyAmino = {
  tryptophan_g: '',
  threonine_g: '',
  isoleucine_g: '',
  leucine_g: '',
  lysine_g: '',
  methionine_g: '',
  cystine_g: '',
  phenylalanine_g: '',
  tyrosine_g: '',
  valine_g: '',
  arginine_g: '',
  histidine_g: '',
  alanine_g: '',
  aspartic_g: '',
  glutamic_g: '',
  glycine_g: '',
  proline_g: '',
  serine_g: '',
};

const withAgAndAmino = food => {
  const { id } = food;

  const AGData = lodash.find(AG, { id }) || emptyAG;
  const AminoData = lodash.find(AMINO, { id }) || emptyAmino;

  return Object.assign({}, food, AGData, AminoData);
};

const final = ALL_FOOD.map(withAgAndAmino);

writeFile(
  resolve(__dirname, 'combined.json'),
  JSON.stringify(final, null, 2),
  console.log
);
