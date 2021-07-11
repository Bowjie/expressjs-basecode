const { BaseResponse } = require('../config/message.config');
const sql = require('./db');

const Bank = function (bank) {
  this.name = bank.name;
  this.branch = bank.branch;
};

Bank.create = (newBank, result) => {
  sql.query('INSERT INTO bank SET ?', newBank, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(err, null);
      return;
    }
    result(null, { data: { id: res.insertId }, ...BaseResponse });
  });
};

module.exports = Bank;
