module.exports.countyPaginateParams = page => {
  return { page, limit: 20, select: 'state fipsCode name' };
};
