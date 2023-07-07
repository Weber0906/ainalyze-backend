const express = require('express');
const router = express.Router();

const {
    _getAllExchanges,
    _getExchange,
    _searchExchange,
    _insertExchange,
    _deleteExchange,
    _updateExchange
  } = require('../controllers/exchanges.js')

router.get('/api/search/exchange', _searchExchange)
router.get('/api/exchanges', _getAllExchanges)
router.get('/api/exchanges/:id', _getExchange)
router.post('/api/exchanges', _insertExchange)
router.delete('/api/exchanges/:id', _deleteExchange)
router.put('/api/exchanges/:id', _updateExchange)

module.exports = {
  router
}