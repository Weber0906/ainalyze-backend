const express = require('express');
const router = express.Router();


const {
    _getAllStocks,
    _getStock,
    _searchStock,
    _insertStock,
    _deleteStock,
    _updateStock,
  } = require('../controllers/stocks.js')

router.get('/api/search/stock', _searchStock)
router.get('/api/stocks/:exchange_id', _getAllStocks)
router.get('/api/stock/:id',  _getStock)
router.post('/api/stocks', _insertStock)
router.delete('/api/stocks/:id', _deleteStock)
router.put('/api/stocks/:id', _updateStock)

module.exports = { router };