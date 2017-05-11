const mongoose = require('mongoose');

const basicSchema = new mongoose.Schema({
  year: Number,
  number: Number,
  percent: Number,
  lowerConfidenceLimit: Number,
  upperConfidenceLimit: Number,
  ageAdjustedPercent: Number,
  ageAdjustedLowerConfidenceLimit: Number,
  ageAdjustedUpperConfidenceLimit: Number
});

const basicSchemaBySex = new mongoose.Schema({
  year: Number,
  maleNumber: Number,
  malePercent: Number,
  maleLowerConfidenceLimit: Number,
  maleUpperConfidenceLimit: Number,
  maleAgeAdjustedPercent: Number,
  maleAgeAdjustedLowerConfidenceLimit: Number,
  maleAgeAdjustedUpperConfidenceLimit: Number,
  femaleNumber: Number,
  femalePercent: Number,
  femaleLowerConfidenceLimit: Number,
  femaleUpperConfidenceLimit: Number,
  femaleAgeAdjustedPercent: Number,
  femaleAgeAdjustedLowerConfidenceLimit: Number,
  femaleAgeAdjustedUpperConfidenceLimit: Number
});

const diagnosedDiabetesIncidence = new mongoose.Schema({
  year: Number,
  numberOfNewCases: Number,
  rate: Number,
  lowerConfidenceLimit: Number,
  upperConfidenceLimit: Number,
  ageAdjustedRate: Number,
  ageAdjustedLowerConfidenceLimit: Number,
  ageAdjustedUpperConfidenceLimit: Number
});

const CountySchema = new mongoose.Schema({
  state: {
    type: String,
    required: true
  },
  fipsCode: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  diagnosedDiabetesPrevalence: [basicSchema],
  diagnosedDiabetesPrevalenceBySex: [basicSchemaBySex],
  diagnosedDiabetesIncidence: [diagnosedDiabetesIncidence],
  leisureTimePhysicalInactivityPrevalence: [basicSchema],
  leisureTimePhysicalInactivityPrevalenceBySex: [basicSchemaBySex],
  obesityPrevalence: [basicSchema],
  obesityPrevalenceBySex: [basicSchemaBySex]
});

module.exports = mongoose.model('County', CountySchema);
