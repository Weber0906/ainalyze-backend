const {db}  = require('../config/db.js');

const getAllExchanges = () => {
  return db('exchanges')
  .select('id', 'name', 'url')
  .orderBy('id')
}

const getExchange = (exchange_id) => {
  return db('exchanges')
  .select('id','name','url') 
  .where({id:exchange_id})
}

const searchExchange = (name) => {
  return db('exchanges')
  .select('id','name','url')
  .whereILike('name', `${name}%`)
}

const insertExchange = (exchange) => {
  return db('exchanges')
  .insert(exchange)  ///(id	type	locale	name	operating_mic	url)
  .returning('*')
}

const deleteExchange = (id) => {
  return db('exchanges')
  .where({id})
  .del()
  .returning('*')
}

const updateExchange = (id, exchange) => {
  return db('exchanges')
  .update(exchange)
  .where({id})
  .returning('*')
}

module.exports = {
  getAllExchanges,
  getExchange,
  searchExchange,
  insertExchange,
  deleteExchange,
  updateExchange
}