const Bank = require('../models/bank.model');
const { ObjectEmptyChecker } = require('../extras/error-handler');
const { Error } = require('../config/message.config');

exports.create = async (req, res) => {
  ObjectEmptyChecker(req.body).then((promise) => {
    if (promise === 'error') {
      res.status(400).send({
        isSuccess: false,
        message: Error.emptyMessage,
      });
      return;
    }

    const bankObject = new Bank(req.body);

    Bank.create(bankObject, (err, data) => {
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
