const {
    getAllExchanges,
    getExchange,
    searchExchange,
    insertExchange,
    deleteExchange,
    updateExchange,
  } = require("../modules/exchanges.js");
  
  // READ - GET all get all products
  const _getAllExchanges = (req, res) => {
    getAllExchanges()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  
  const _getExchange = (req, res) => {
    const id = req.params.id;
    getExchange(id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  const _searchExchange = (req, res) => {
    searchExchange(req.query.name)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  const _insertExchange = (req, res) => {
    insertExchange(req.body)
      .then((data) => {
        // res.json(data)
        _getAllProducts(req, res);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  const _deleteExchange = (req, res) => {
    deleteExchange(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  const _updateExchange = (req, res) => {
    updateExchange(req.params.id, req.body)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
        res.status(404).json({ msg: err.message });
      });
  };
  
  module.exports = {
    _getAllExchanges,
    _getExchange,
    _searchExchange,
    _insertExchange,
    _deleteExchange,
    _updateExchange,
  };