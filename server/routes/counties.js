const router = require('express').Router();
const County = require('../models/county');

router.get('/', (req, res, next) => {
  const options = { page: req.query.page, limit: 25, select: 'state fipsCode name' };
  County.paginate({}, options).then(counties => {
    res.status(200).json({ counties });
  }).catch(next);
});

router.get('/:id', (req, res, next) => {
  County.findOne({ _id: req.params.id }).then(county => {
    res.status(200).json({ county });
  }).catch(next);
});

router.get('/search/:name', (req, res, next) => {
  const regExp = new RegExp(`.*${req.params.name}.*`, 'i');
  County.find({ name: regExp }, 'state fipsCode name').then(counties => {
    res.status(200).json({ counties });
  }).catch(next);
});

module.exports = router;
