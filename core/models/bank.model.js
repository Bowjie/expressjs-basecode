const { BaseResponse } = require('../config/shared.config');
const sql = require('./db');

const Bank = function (bank) {
  this.name = bank.name;
  this.branch = bank.branch;
};

Bank.add = (newBank, result) => {
  sql.query('INSERT INTO bank SET ?', newBank, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, { data: { id: res.insertId }, ...BaseResponse });
  });
};

Bank.update = (newBank, result) => {
  sql.query('INSERT INTO bank SET ?', newBank, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, null);
  });
};

Bank.delete = (newBank, result) => {
  sql.query('INSERT INTO bank SET ?', newBank, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, null);
  });
};

Bank.get = (newBank, result) => {
  const QUERY = `
                SELECT
                 
  `;
  sql.query(QUERY, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, null);
  });
};

module.exports = Bank;
