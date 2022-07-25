const { Router } = require('express');
const { postTransaction, deleteTransaction, getTransactions, putTransaction } = require('../controllers/transactionController');

const transactionRoutes = Router();

transactionRoutes.get('/', getTransactions);
transactionRoutes.post('/', postTransaction );
transactionRoutes.put('/:id', putTransaction );
transactionRoutes.delete('/:id', deleteTransaction );


module.exports = {
  transactionRoutes
};