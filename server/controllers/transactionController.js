const { User } = require('../models/User');
const { Transaction } = require('../models/Transaction');


//getTransactions
const getTransactions = async ( req, res ) => {
  const user = req.user;
  try {
    const transactions = await Todo.findAll({
      attributes: ["id", "name", "description", "amount", "movement", "userId" ],
      where: { userId: user.id },
    });

    res.json(transactions);

  } catch ( error ) {
    return res.status(500).json({ message: error.message });
  }
}


//create new transaction
const postTransaction = async ( req, res ) => {
  try{
    const { id, name, description, movement, amount, userId } = req.body;
    const newTransaction = await Transaction.create({
      id,
      name,
      description,
      amount,
      movement,
      userId
    });
    
    res.json( newTransaction );

  } catch ( error ) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteTransaction = async ( req, res ) => {
  const { id } = req.params;
  try{
    const deleteTransaction = await Transaction.destroy({
      where: { id: id },
    });

    res.json({
      deleteTransaction,
      msg: 'Deleted'
    });

  } catch ( error ) {
    return res.status(500).json({ message: error.message })
  }
};


const putTransaction = async ( req, res ) => {
  const { id } = req.params;
  try{
    const transaction = await Transaction.findOne({
      attributes: ["name", "description", "amount", "movement", "id", "userId" ],
      where: { id },
    });

    transaction.set(req.body);
    
    await transaction.save();
    res.json(transaction);

  } catch ( error ) {
    return res.status(500).json({ message: error.message });
  }
}


module.exports = {
  getTransactions,
  postTransaction,
  deleteTransaction,
  putTransaction
}