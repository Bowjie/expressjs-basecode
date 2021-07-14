const Bank = require('../models/bank.model');
const { ObjectEmptyChecker } = require('../extras/error-handler');
const { Error } = require('../config/message.config');

exports.add = (req, res) => {
  ObjectEmptyChecker(req.body).then((promise) => {
    if (promise === 'error') {
      res.status(400).send({
        isSuccess: false,
        message: Error.emptyMessage,
      });
      return;
    }

    const bankObject = new Bank(req.body);

    Bank.add(bankObject, (err, data) => {
      if (err) {
        res.status(500).send({
          isSuccess: false,
          message: Error.message,
        });
      } else {
        res.send(data);
      }
    });
  });
};

exports.pu = (req, res) => {};
exports.get = (req, res) => {};
