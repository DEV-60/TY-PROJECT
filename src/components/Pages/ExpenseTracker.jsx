import React, { useState, useEffect } from 'react';
import './ExpenseTracker.css';

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const addTransaction = (e) => {
    e.preventDefault();
    if (!text || !amount) return;

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount
    };

    setTransactions([...transactions, newTransaction]);
    setText('');
    setAmount('');
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const balance = transactions.reduce((acc, item) => acc + item.amount, 0).toFixed(2);
  const income = transactions.filter(item => item.amount > 0).reduce((acc, item) => acc + item.amount, 0).toFixed(2);
  const expense = transactions.filter(item => item.amount < 0).reduce((acc, item) => acc + item.amount, 0).toFixed(2);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">${Math.abs(expense)}</p>
        </div>
      </div>
      <h3>Balance: ${balance}</h3>
      <h3>Add new transaction</h3>
      <form onSubmit={addTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (
          <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseTracker;
