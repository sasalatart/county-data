const router = require('express').Router();
const County = require('../models/county');
const paginateParams = require('../utils').countyPaginateParams;

router.get('/', (req, res, next) => {
  County.paginate({}, paginateParams(req.query.page)).then(counties => {
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
  County.paginate({ name: regExp }, paginateParams(req.query.page)).then(counties => {
    res.status(200).json({ counties });
  }).catch(next);
});

module.exports = router;
