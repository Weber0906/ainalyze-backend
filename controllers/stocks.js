const {
    getAllStocks,
    getStock,
    searchStock,
    insertStock,
    deleteStock,
    updateStock
  } = require("../modules/stocks.js");
  
  // READ - GET all get all products
  const _getAllStocks = (req, res) => {
    const exchange_id = req.params.exchange_id;
    getAllStocks(exchange_id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  
  const _getStock = (req, res) => {
    const id = req.params.id;
    getStock(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  const _searchStock = (req, res) => {
    searchStock(req.query.name)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  const _insertStock = (req, res) => {
    insertStock(req.body)
      .then((data) => {
        // res.json(data)
        _getAllStocks(req, res);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  const _deleteStock = (req, res) => {
    deleteStock(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  const _updateStock = (req, res) => {
    updateStock(req.params.id, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  module.exports = {
    _getAllStocks,
    _getStock,
    _searchStock,
    _insertStock,
    _deleteStock,
    _updateStock,
  };