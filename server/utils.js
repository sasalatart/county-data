module.exports.countyPaginateParams = page => {
  return { page, limit: 25, select: 'state fipsCode name' };
};
