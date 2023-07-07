const {db}  = require('../config/db.js');

const getAllStocks = (exchangeId) => {
    let query = db('stocks').select('id', 'act_symbol', 'company_name', 'lastsale', 'exchange_id').orderBy('act_symbol');
  
    if (exchangeId) {
      query = query.where('exchange_id', exchangeId);
    }
  
    return query;
  };

const getStock = (stock_id) => {
  return db('stocks')
  .select('id','act_symbol', 'lastsale', 'company_name') 
  .where({id:stock_id})
}

const searchStock = (company_name) => {
  return db('stocks')
  .select('id','act_symbol', 'company_name')
  .whereILike('company_name', `${company_name}%`)
}

const insertStock = (stock) => {
  return db('stocks')
  .insert(stock)  
  .returning('*')
}

const deleteStock = (id) => {
  return db('stocks')
  .where({id})
  .del()
  .returning('*')
}

const updateStock = (id, stock) => {
  return db('stocks')
  .update(stock)
  .where({id})
  .returning('*')
}

module.exports = {
  getAllStocks,
  getStock,
  searchStock,
  insertStock,
  deleteStock,
  updateStock
}