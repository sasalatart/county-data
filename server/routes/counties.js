const router = require('express').Router();
const County = require('../models/county');

router.get('/', (req, res, next) => {
  const options = { page: req.query.page, limit: 25, select: 'state fipsCode name' };
  County.paginate({}, options).then(counties => {
    res.status(200).json({ counties });
  }).catch(next);
});

module.exports = router;
